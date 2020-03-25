using Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace ApplacationBLLInterfaces
{
    public interface ICSVreaderService
    {
        IEnumerable<DataModel> GetAllData();
        IEnumerable<TypeModel> GetTypes();
        IEnumerable<StatusModel> GetStatus();
        bool NewData(DataModel dataModel);
        bool DeleteData(int id);
        DataModel GetById(int id);

    }
}
