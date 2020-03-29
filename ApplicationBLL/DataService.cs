using ApplacationBLLInterfaces;
using ApplicationBinding;
using Microsoft.EntityFrameworkCore;
using Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace ApplicationBLL
{
    public class DataService : IDataService
    {
        private readonly ApplicationDBContext _context;
        public DataService(ApplicationDBContext context)
        {
            _context = context;
        }
        public IEnumerable<DataModel> GetAllData()
        {

            var result = new List<DataModel>();
            try
            {
                result = _context.dataModels.ToList();


            }
            catch (System.Exception)
            {

            }
            return result;
        }
        public IEnumerable<StatusModel> GetStatus()
        {

            var result = new List<StatusModel>();
            try
            {
                result = _context.statusModels.ToList();


            }
            catch (System.Exception)
            {

            }
            return result;
        }
        public IEnumerable<TypeModel> GetTypes()
        {

            var result = new List<TypeModel>();
            try
            {
                result = _context.typeModels.ToList();


            }
            catch (System.Exception)
            {

            }
            return result;
        }
        public bool NewData(DataModel dataModel)
        {
            try
            {
                _context.Add(dataModel);
                _context.SaveChanges();
            }
            catch (System.Exception)
            {
                return false;
            }
            return true;
        }
        public bool DeleteData(int id)
        {
            try
            {
                _context.Entry(new DataModel { Id = id }).State = EntityState.Deleted;
                _context.SaveChanges();
            }
            catch (System.Exception)
            {
                return false;
            }
            return true;
        }
        public DataModel GetById(int id)
        {
            var result = new DataModel();
            try
            {
                result = _context.dataModels.Single(x => x.Id == id);


            }
            catch (System.Exception)
            {

            }
            return result;
        }

    }
}
