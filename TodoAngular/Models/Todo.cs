using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TodoAngular.Models
{
    public class Todo
    {
        public Todo()
        {
            Id = Guid.NewGuid();
            DateCreated = DateTime.Now;
        }

        public Guid Id { get; set; }

        public string Name { get; set; }

        public bool Done { get; set; }

        public DateTime DateCreated { get; set; }
    }
}