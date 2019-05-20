using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using BussinessLogic1;

namespace WebAPI.Controllers
{
    public class CategoryController : ApiController
    {
        CasestudyDBEntities db = new CasestudyDBEntities();

        public IHttpActionResult Get()
        {
            var objRepo = new CategoryRepository();
            return Ok(objRepo.ListCategory());
        }

        public IHttpActionResult Get(int category_id)
        {
            var dept = db.Workout_Category.Find(category_id);
            if (dept == null) return NotFound();
            return Ok(dept);
        }

        public IHttpActionResult Post(Workout_Category obj)
        {
            db.Workout_Category.Add(obj);
            var rows = db.SaveChanges();
            if (rows > 0)
            {
                return StatusCode(HttpStatusCode.Created);
            }
            else
            {
                return BadRequest();
            }
        }

        public IHttpActionResult Put(Workout_Category obj)
        {
            db.Workout_Category.Attach(obj);
            db.Entry(obj).State = System.Data.Entity.EntityState.Modified;
            var rows = db.SaveChanges();
            if (rows > 0)
            {

                return StatusCode(HttpStatusCode.Accepted);
            }
            else
            {
                return BadRequest();
            }
        }

        public IHttpActionResult Delete(int category_id)
        {
            var dept = db.Workout_Category.Find(category_id);
            if (dept == null) return NotFound();
            db.Workout_Category.Remove(dept);
            var rows = db.SaveChanges();
            if (rows > 0)
            {
                return StatusCode(HttpStatusCode.Created);
            }
            else
            {
                return BadRequest();
            }
        }

    }
}
