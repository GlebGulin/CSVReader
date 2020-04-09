using CsvHelper.Configuration;
using Models;
using System;

namespace Mappers
{
    public sealed class DataMap : ClassMap<DataModel>
    {
        public DataMap()
        {
            Map(m => m.Id).Name("Id");
            Map(m => m.TransactionId).Name("TransactionId");
            Map(m => m.StatusId).Name("StatusId");
            Map(m => m.Status).Name("Status");
            Map(m => m.TypeId).Name("TypeId");
            Map(m => m.ClientName).Name("ClientName");
            Map(m => m.Amount).Name("Amount");
            
        }
    }
}
