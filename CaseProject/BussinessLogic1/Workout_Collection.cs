//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace BussinessLogic1
{
    using System;
    using System.Collections.Generic;
    
    public partial class Workout_Collection
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Workout_Collection()
        {
            this.Workout_Active = new HashSet<Workout_Active>();
        }
    
        public string Workout_title { get; set; }
        public string WorkoutNote { get; set; }
        public Nullable<double> Calories_Burn_Per_min { get; set; }
        public Nullable<int> category_id { get; set; }
        public int workout_id { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Workout_Active> Workout_Active { get; set; }
        public virtual Workout_Category Workout_Category { get; set; }
    }
}
