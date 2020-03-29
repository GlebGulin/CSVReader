using ApplacationBLLInterfaces;
using ApplicationBinding;
using System;
using System.Collections.Generic;
using System.IO;
using System.Text;

namespace ApplicationBLL
{
    public class ParseService : IParseService
    {
        private readonly ApplicationDBContext _context;
        public ParseService(ApplicationDBContext context)
        {
            _context = context;
        }
        public bool NewFile(byte[] file)
        {
            try
            {
                
            }
            catch (System.Exception)
            {
                return false;
            }
            return true;
        }
    }
}
