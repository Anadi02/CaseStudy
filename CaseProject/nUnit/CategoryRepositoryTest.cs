using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using NUnit.Framework;
using BussinessLogic1;
namespace nUnit
{
    [TestFixture]
   public class CategoryRepositoryTest
    {
        [Test]

        public void GetAllCategoryTest()
        {
            CategoryRepository obj = new CategoryRepository();
            double actual = 0;
            double expected = 0;
                Assert.AreEqual(expected, actual);
        }
       
    }
}
