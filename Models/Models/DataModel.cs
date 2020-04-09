using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using CsvHelper.Configuration.Attributes;


namespace Models
{
    public class DataModel
    {
        [Key]
        [Name("Id")]
        public int Id { get; set; }
        [Name("TransactionId")]
        //[Name(Constants.CsvHeaders.Firstname)]
        public int TransactionId { get; set; }
        [Name("StatusId")]
        public int StatusId { get; set; }
        [Name("Status")]
        public string Status { get; set; }
        [ForeignKey("StatusId")]
        
        public virtual StatusModel statusModel { get; set; }
        [Name("TypeId")]
        public int TypeId { get; set; }
        public string Type { get; set; }
        [ForeignKey("TypeId")]
        public virtual TypeModel typeModel { get; set; }
        [Name("ClientName")]

        public string ClientName { get; set; }
        [Name("Amount")]
        public double Amount { get; set; }
    }
}
