using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using AirTrade.WebPlatform.Models;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace AirTrade.WebPlatform.Controllers
{
    [Route("api/[controller]")]
    public class StockBasicController : Controller
    {
        // GET: api/stockbasic
        [HttpGet]
        public IEnumerable<StockBasic> Get()
        {
            StockBasicList stockBasicList = new StockBasicList();
            return stockBasicList.GetAll();
        }
    }
}
