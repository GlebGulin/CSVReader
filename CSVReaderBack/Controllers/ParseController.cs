using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ApplacationBLLInterfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CSVReaderBack.Controllers
{
    //[Route("api/[controller]")]
    [ApiController]
    public class ParseCSVController : ControllerBase
    {
        private readonly IParseService _service;

        public ParseCSVController(IParseService service)
        {
            _service = service;
        }
        [HttpPost("upload")]
              [Route("csv/upload")]
        public IActionResult UploadFile(IFormFile file)
        {
            return Ok(file);
        }
    }
}