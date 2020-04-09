using Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Text;

namespace ApplacationBLLInterfaces
{
    public interface IParseService
    {
        //bool NewFile(byte[] file);
        List<DataModel> GetReceivedData();
    }
}
