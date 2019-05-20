using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BussinessLogic1
{
   public class CategoryRepository
    {
       private CasestudyDBEntities db = new CasestudyDBEntities();
        public List<Workout_Category> ListCategory()
        {
            try
            {
                return db.Workout_Category.ToList();
            }
            catch(Exception ex)
            {
                throw ex;
            }
        }
        public void AddCategory(Workout_Category item)
        {
            try
            {
                CasestudyDBEntities db = new CasestudyDBEntities();
                db.Workout_Category.Add(item);
                db.SaveChanges();
            }
            catch (Exception ex)
            {
                throw ex;
            }

        }
        public void DeleteCategory(int id)
        {
            Console.WriteLine("enter the category id to delete");
            int Id = int.Parse(Console.ReadLine());
            try
            {
                CasestudyDBEntities db = new CasestudyDBEntities();
                var ObjCategory = (from obj in db.Workout_Category
                                   where obj.category_id == Id
                                   select obj).First();
                db.Workout_Category.Remove(ObjCategory);
                db.SaveChanges();


            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public void EditCategory(Workout_Category item)
        {

            try
            {
                CasestudyDBEntities db = new CasestudyDBEntities();
                var ObjCategory = (from obj in db.Workout_Category
                                   where obj.category_id == item.category_id
                                   select obj).First();

                ObjCategory.category_name = item.category_name;

                db.SaveChanges();




            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public Workout_Category Get(int id)
        {
            Workout_Category objWork = null;

            try
            {
                CasestudyDBEntities db = new CasestudyDBEntities();
                objWork = (from obj in db.Workout_Category
                           where obj.category_id == id
                           select obj).First();
            }
            catch (Exception ex)
            {
                throw ex;
            }

            return objWork;

        }






    }


}
    

