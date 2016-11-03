using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Web.Models;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace Web.Controllers
{
    [Route("api/[controller]")]
    public class RunnerController : Controller
    {
        // GET: api/runner
        [HttpGet]
        public Runner[] Get()
        {
            var runners = new List<Runner>();

            runners.Add(new Runner { Id = 1, FirstName = "FirstName1", LastName = "LastName1", Age = 21, FavoriteBeer = "Paullaner" });
            runners.Add(new Runner { Id = 2, FirstName = "FirstName2", LastName = "LastName2", Age = 22, FavoriteBeer = "Bergenbier" });
            runners.Add(new Runner { Id = 3, FirstName = "FirstName3", LastName = "LastName3", Age = 23, FavoriteBeer = "Zaganu" });

            return runners.ToArray();
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public Runner Get(int id)
        {
            return Get().SingleOrDefault(r => r.Id == id);
        }
    }
}
