using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AirTrade.WebPlatform.Models
{
    public class StockBasicList
    {
        List<StockBasic> _stockBasicList = new List<StockBasic>() {
            new StockBasic { Code = "000793", Name = "华闻传媒" },
            new StockBasic { Code = "002176", Name = "江特电机" } };

        public IEnumerable<StockBasic> GetAll()
        {
            return _stockBasicList;
        }
    }
}
