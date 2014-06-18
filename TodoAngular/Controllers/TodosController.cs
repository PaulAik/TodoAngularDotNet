using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using TodoAngular.Models;

namespace TodoAngular.Controllers
{
    public class TodosController : Controller
    {
        private static IList<Todo> todos;

        public TodosController()
        {
            if (todos == null)
            {
                todos = new List<Todo>();

                todos.Add(new Todo { Name = "Server Todo 1 !" });
            }
        }

        [HttpGet]
        public ActionResult Index()
        {
            return Json(todos, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public ActionResult Create(Todo model)
        {
            todos.Add(model);

            return Json(model, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public ActionResult Update(Todo model)
        {
            var todo = todos.Where(x => x.Id == model.Id).FirstOrDefault();

            if (todo != null)
            {
                todo.Name = model.Name;
                todo.Done = model.Done;
            }

            return Json(todo, JsonRequestBehavior.AllowGet);
        }
    }
}