﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace BussinessLogic
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    
    public partial class CasestudyDBEntities : DbContext
    {
        public CasestudyDBEntities()
            : base("name=CasestudyDBEntities")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public virtual DbSet<Workout_Active> Workout_Active { get; set; }
        public virtual DbSet<Workout_Category> Workout_Category { get; set; }
        public virtual DbSet<Workout_Collection> Workout_Collection { get; set; }
    }
}
