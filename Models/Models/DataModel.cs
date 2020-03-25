using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Models
{
    public class DataModel
    {
        [Key]
        public int Id { get; set; }
        public int TransactionId { get; set; }
        public int StatusId { get; set; }
        public string Status { get; set; }
        [ForeignKey("StatusId")]
        public virtual StatusModel statusModel { get; set; }
        public int TypeId { get; set; }
        public string Type { get; set; }
        [ForeignKey("TypeId")]
        public virtual TypeModel typeModel { get; set; }
        public string ClientName { get; set; }
        public double Amount { get; set; }
    }
}
