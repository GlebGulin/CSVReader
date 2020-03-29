using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ApplacationBLLInterfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Models;

namespace CSVReaderBack.Controllers
{
    //[Route("api/[controller]")]
    [ApiController]
    public class CSVReaderController : ControllerBase
    {
        private readonly IDataService _service;
        public CSVReaderController(IDataService service)
        {
            _service = service;
        }
        [HttpGet]
        [Route("csv/show")]
        public IActionResult ShowData()
        {
            return Ok((_service.GetAllData(), _service.GetStatus(), _service.GetTypes()));
        }
        [HttpPost]
        [Route("csv/create")]
        public IActionResult AddData([FromBody]DataModel dataModel)
        {
            return Ok(_service.NewData(dataModel));
        }
    }
}