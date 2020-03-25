using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Models
{
    public class TypeModel
    {
        [Key]
        public int Id { get; set; }
        public string Type { get; set; }
    }
}
