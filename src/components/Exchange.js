import { useState } from "react";

const Exchange = () => {
  const [tabSelect, setTabSelect] = useState("Limit");

  const [method, setMethod] = useState("Arithmetic");

  const chooseTab = (tab) => {
    setTabSelect(tab);
  };

  const chooseMethod = (method) => {
    setMethod(method);
  };

  const limit = (
    <div className="flex flex-col lg:flex-row">
      <div className="flex-1 px-6 py-3">
        <div className="flex">
          <p className="text-sm text-info">Buy BTC</p>
          <p className="ml-auto text-sm text-white">0 USDT</p>
        </div>
        <div className="flex flex-col mt-2">
          <div className="relative flex items-center">
            <label className="absolute ml-3 text-sm text-info">Price</label>
            <input
              type="number"
              className="w-full py-1 pl-12 text-base text-white border border-opacity-25 rounded-sm focus:outline-none focus:ring-0 focus:border-orange border-info bg-main"
            ></input>
            <span className="absolute right-0 mr-3 text-xs text-info">
              USDT
            </span>
          </div>
          <div className="w-full px-2 py-2 text-xs border border-opacity-5 text-info bg-third border-info">
            ≈ $67.08
          </div>
        </div>
        <div className="relative flex items-center mt-1">
          <label className="absolute ml-3 text-sm text-info">Amount</label>
          <input
            type="number"
            className="w-full py-1 pl-12 text-base text-white border border-opacity-25 rounded-sm focus:outline-none focus:ring-0 focus:border-orange border-info bg-main"
          ></input>
          <span className="absolute right-0 mr-3 text-xs text-info">BTC</span>
        </div>
        <div className="flex mt-2 space-x-2">
          <button className="flex-1 py-1 text-sm text-center border border-opacity-25 border-info text-info">
            25%
          </button>
          <button className="flex-1 py-1 text-sm text-center border border-opacity-25 border-info text-info">
            50%
          </button>
          <button className="flex-1 py-1 text-sm text-center border border-opacity-25 border-info text-info">
            75%
          </button>
          <button className="flex-1 py-1 text-sm text-center border border-opacity-25 border-info text-info">
            100%
          </button>
        </div>
        <div className="my-2">
          <span className="text-sm text-info">Total</span>
        </div>
        <div>
          <button
            className="w-full py-1 text-center text-white rounded-sm bg-orange"
            type="button"
          >
            Log in or Sign Up
          </button>
        </div>
      </div>
      <div className="flex-1 px-6 py-3">
        <div className="flex">
          <p className="text-sm text-info">Sell BTC</p>
          <p className="ml-auto text-sm text-white">0 BTC</p>
        </div>
        <div className="flex flex-col mt-2">
          <div className="relative flex items-center">
            <label className="absolute ml-3 text-sm text-info">Price</label>
            <input
              type="number"
              className="w-full py-1 pl-12 text-base text-white border border-opacity-25 rounded-sm focus:outline-none focus:ring-0 focus:border-orange border-info bg-main"
            ></input>
            <span className="absolute right-0 mr-3 text-xs text-info">
              USDT
            </span>
          </div>
          <div className="w-full px-2 py-2 text-xs border border-opacity-5 text-info bg-third border-info">
            ≈ $67.08
          </div>
        </div>
        <div className="relative flex items-center mt-1">
          <label className="absolute ml-3 text-sm text-info">Amount</label>
          <input
            type="number"
            className="w-full py-1 pl-12 text-base text-white border border-opacity-25 rounded-sm focus:outline-none focus:ring-0 focus:border-orange border-info bg-main"
          ></input>
          <span className="absolute right-0 mr-3 text-xs text-info">BTC</span>
        </div>
        <div className="flex mt-2 space-x-2">
          <button className="flex-1 py-1 text-sm text-center border border-opacity-25 border-info text-info">
            25%
          </button>
          <button className="flex-1 py-1 text-sm text-center border border-opacity-25 border-info text-info">
            50%
          </button>
          <button className="flex-1 py-1 text-sm text-center border border-opacity-25 border-info text-info">
            75%
          </button>
          <button className="flex-1 py-1 text-sm text-center border border-opacity-25 border-info text-info">
            100%
          </button>
        </div>
        <div className="my-2">
          <span className="text-sm text-info">Total</span>
        </div>
        <div>
          <button
            className="w-full py-1 text-center text-white rounded-sm bg-orange"
            type="button"
          >
            Log in or Sign Up
          </button>
        </div>
      </div>
    </div>
  );

  const market = (
    <div className="flex flex-col lg:flex-row">
      <div className="flex-1 px-6 py-3">
        <div className="flex">
          <p className="text-sm text-info">Buy BTC</p>
          <p className="ml-auto text-sm text-white">0 USDT</p>
        </div>
        <div className="flex flex-col mt-2">
          <div className="relative flex items-center">
            <label className="absolute ml-3 text-sm text-info">
              Price{" "}
              <span className="text-base text-opacity-50 text-info">
                The best market price
              </span>
            </label>
            <div className="w-full py-1 text-base text-white border border-opacity-25 border-dashed rounded-sm h-9 focus:outline-none focus:ring-0 border-info bg-main"></div>
            <span className="absolute right-0 mr-3 text-xs text-info">
              USDT
            </span>
          </div>
        </div>
        <div className="relative flex items-center mt-9">
          <label className="absolute ml-3 text-sm text-info">Total</label>
          <input
            type="number"
            className="w-full py-1 pl-12 text-base text-white border border-opacity-25 rounded-sm focus:outline-none focus:ring-0 focus:border-orange border-info bg-main"
          ></input>
          <span className="absolute right-0 mr-3 text-xs text-info">USDT</span>
        </div>
        <div className="flex mt-2 space-x-2">
          <button className="flex-1 py-1 text-sm text-center border border-opacity-25 border-info text-info">
            25%
          </button>
          <button className="flex-1 py-1 text-sm text-center border border-opacity-25 border-info text-info">
            50%
          </button>
          <button className="flex-1 py-1 text-sm text-center border border-opacity-25 border-info text-info">
            75%
          </button>
          <button className="flex-1 py-1 text-sm text-center border border-opacity-25 border-info text-info">
            100%
          </button>
        </div>
        <div className="mt-10">
          <button
            className="w-full py-1 text-center text-white rounded-sm bg-orange"
            type="button"
          >
            Log in or Sign Up
          </button>
        </div>
      </div>
      <div className="flex-1 px-6 py-3">
        <div className="flex">
          <p className="text-sm text-info">Sell BTC</p>
          <p className="ml-auto text-sm text-white">0 BTC</p>
        </div>
        <div className="flex flex-col mt-2">
          <div className="relative flex items-center">
            <label className="absolute ml-3 text-sm text-info">Price</label>
            <div className="w-full py-1 text-base text-white border border-opacity-25 border-dashed rounded-sm h-9 focus:outline-none focus:ring-0 focus:border-orange border-info bg-main"></div>
            <span className="absolute right-0 mr-3 text-xs text-info">
              USDT
            </span>
          </div>
        </div>
        <div className="relative flex items-center mt-9">
          <label className="absolute ml-3 text-sm text-info">Amount</label>
          <input
            type="number"
            className="w-full py-1 pl-12 text-base text-white border border-opacity-25 rounded-sm focus:outline-none focus:ring-0 focus:border-orange border-info bg-main"
          ></input>
          <span className="absolute right-0 mr-3 text-xs text-info">BTC</span>
        </div>
        <div className="flex mt-2 space-x-2">
          <button className="flex-1 py-1 text-sm text-center border border-opacity-25 border-info text-info">
            25%
          </button>
          <button className="flex-1 py-1 text-sm text-center border border-opacity-25 border-info text-info">
            50%
          </button>
          <button className="flex-1 py-1 text-sm text-center border border-opacity-25 border-info text-info">
            75%
          </button>
          <button className="flex-1 py-1 text-sm text-center border border-opacity-25 border-info text-info">
            100%
          </button>
        </div>
        <div className="mt-10">
          <button
            className="w-full py-1 text-center text-white rounded-sm bg-orange"
            type="button"
          >
            Log in or Sign Up
          </button>
        </div>
      </div>
    </div>
  );

  const gridTrading = (
    <div className="flex flex-col lg:flex-row">
      <div className="flex-1 px-6 py-3">
        <div className="flex flex-col">
          <div className="text-xs text-white">Custom policy:</div>
          <div className="mt-2 text-xs text-info">Available: 0 USDT 0 BTC</div>
          <div className="flex mt-1 text-xs text-info">Price range:</div>
          <div className="flex flex-col lg:flex-row mt-1">
            <div className="relative flex items-center flex-1">
              <input
                placeholder="Lower"
                type="number"
                className="w-full py-1 pl-2 text-base text-white border border-opacity-25 rounded-sm placeholder-info focus:outline-none focus:ring-0 focus:border-orange border-info bg-main"
              ></input>
              <span className="absolute right-0 mr-3 text-xs text-info">
                USDT
              </span>
            </div>
            <div className="mx-2 mb-2 text-4xl text-opacity-25 text-info text-center">
              -
            </div>
            <div className="relative flex items-center flex-1">
              <input
                placeholder="Upper"
                type="number"
                className="w-full py-1 pl-2 text-base text-white border border-opacity-25 rounded-sm placeholder-info focus:outline-none focus:ring-0 focus:border-orange border-info bg-main"
              ></input>
              <span className="absolute right-0 mr-3 text-xs text-info">
                USDT
              </span>
            </div>
          </div>
          <div className="mt-2 text-xs text-info">The number of grids:</div>
          <div className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 mt-2 lg:space-x-8">
            <div className="relative flex items-center flex-1">
              <input
                placeholder="2-100"
                type="number"
                className="w-full py-1 pl-2 text-base text-white border border-opacity-25 rounded-sm placeholder-info focus:outline-none focus:ring-0 focus:border-orange border-info bg-main"
              ></input>
            </div>
            <div className="relative flex items-center flex-1 space-x-4">
              <div className="flex flex-1">
                <button
                  onClick={() => chooseMethod("Arithmetic")}
                  className={`w-full px-3 py-2 text-sm border rounded-xs ${
                    method === "Arithmetic"
                      ? "border-orange text-orange"
                      : "border-info text-info border-opacity-25"
                  }`}
                >
                  Arithmetic
                </button>
              </div>
              <div className="flex flex-1">
                <button
                  onClick={() => chooseMethod("Geometric")}
                  className={`w-full px-3 py-2 text-sm border rounded-xs ${
                    method === "Geometric"
                      ? "border-orange text-orange"
                      : "border-info text-info border-opacity-25"
                  }`}
                >
                  Geometric
                </button>
              </div>
            </div>
          </div>
          <div>
            <small className="text-xs text-info">
              {method === "Geometric"
                ? "Profit per grid --%～--%(Trading Fee deducted)"
                : "Profit per grid --%(Trading Fee deducted)"}
            </small>
          </div>
          <div className="flex flex-col lg:flex-row mt-4 lg:mt-2 space-y-3 lg:space-y-0 lg:space-x-4">
            <div className="flex flex-1">
              <div className="flex flex-col w-full">
                <label className="text-xs text-info">Investment</label>
                <div className="relative flex items-center mt-1">
                  <input
                    type="number"
                    className="w-full py-1 pl-2 text-base text-white border border-opacity-25 rounded-sm placeholder-info focus:outline-none focus:ring-0 focus:border-orange border-info bg-main"
                  ></input>
                  <span className="absolute right-0 mr-3 text-xs text-info">
                    USDT
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-1">
              <div className="flex flex-col w-full">
                <label className="text-xs text-info">SL Price(OPT)</label>
                <div className="relative flex items-center mt-1">
                  <input
                    type="number"
                    className="w-full py-1 pl-2 text-base text-white border border-opacity-25 rounded-sm placeholder-info focus:outline-none focus:ring-0 focus:border-orange border-info bg-main"
                  ></input>
                  <span className="absolute right-0 mr-3 text-xs text-info">
                    USDT
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-1">
              <div className="flex flex-col w-full">
                <label className="text-xs text-info">TP Price(OPT)</label>
                <div className="relative flex items-center mt-1">
                  <input
                    type="number"
                    className="w-full py-1 pl-2 text-base text-white border border-opacity-25 rounded-sm placeholder-info focus:outline-none focus:ring-0 focus:border-orange border-info bg-main"
                  ></input>
                  <span className="absolute right-0 mr-3 text-xs text-info">
                    USDT
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex mt-2">
            <div className="text-xs text-info">Use the original BTC </div>
            <div class="flex items-center ml-8">
              <label for="toogleA" class="flex items-center cursor-pointer">
                <div class="relative">
                  <input id="toogleA" type="checkbox" class="sr-only" />
                  <div class="switch w-7 h-3 bg-info bg-opacity-40 rounded-full shadow-inner"></div>
                  <div class="dot absolute w-5 h-5 bg-info  rounded-full shadow -left-1 -top-1 transition"></div>
                </div>
              </label>
            </div>
          </div>
          <div className="mt-3">
            <button
              className="w-full py-1 text-center text-white rounded-sm bg-orange"
              type="button"
            >
              Log in or Sign Up
            </button>
          </div>
        </div>
      </div>
      <div className="flex-1 px-6 py-3">
        <div className="flex flex-col">
          <div className="text-xs text-white">AI policy：</div>
          <div className="mt-2 text-xs text-info">Available: 0 USDT 0 BTC</div>
          <div className="flex items-center mt-1 text-xs text-info">
            Price range:{" "}
            <div className="ml-auto">
              Seven-day annualized yield{" "}
              <span className="text-base text-success">52.22 %</span>
            </div>
          </div>
          <div className="relative flex items-center mt-1">
            <label className="absolute ml-3 text-sm text-info">
              <span className="text-base text-opacity-50 text-info">
                58558.4800 ~ 71571.4700
              </span>
            </label>
            <div className="w-full py-1 text-base text-white border border-opacity-25 border-dashed rounded-sm h-9 focus:outline-none focus:ring-0 border-info bg-main"></div>
            <span className="absolute right-0 mr-3 text-xs text-info">
              USDT
            </span>
          </div>
          <div className="mt-4 text-xs text-info">The number of grids:</div>
          <div className="relative flex items-center mt-2">
            <label className="absolute ml-3 text-sm text-info">
              <span className="text-base text-opacity-50 text-info">20</span>
            </label>
            <div className="w-full py-1 text-base text-white border border-opacity-25 border-dashed rounded-sm h-9 focus:outline-none focus:ring-0 border-info bg-main"></div>
            <span className="absolute right-0 mr-3 text-xs text-info">
              USDT
            </span>
          </div>
          <div className="mt-1">
            <small className="text-xs text-info">
              Profit per grid 0.56%～0.76%(Trading Fee deducted)
            </small>
          </div>
          <div className="flex flex-col lg:flex-row mt-2 space-y-4 lg:space-y-0 lg:space-x-4">
            <div className="flex flex-1">
              <div className="flex flex-col w-full">
                <label className="text-xs text-info">Investment</label>
                <div className="relative flex items-center mt-1">
                  <input
                    type="number"
                    className="w-full py-1 pl-2 text-base text-white border border-opacity-25 rounded-sm placeholder-info focus:outline-none focus:ring-0 focus:border-orange border-info bg-main"
                  ></input>
                  <span className="absolute right-0 mr-3 text-xs text-info">
                    USDT
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-1">
              <div className="flex flex-col w-full">
                <label className="text-xs text-info">SL Price(OPT)</label>
                <div className="relative flex items-center mt-1">
                  <input
                    type="number"
                    className="w-full py-1 pl-2 text-base text-white border border-opacity-25 rounded-sm placeholder-info focus:outline-none focus:ring-0 focus:border-orange border-info bg-main"
                  ></input>
                  <span className="absolute right-0 mr-3 text-xs text-info">
                    USDT
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-1">
              <div className="flex flex-col w-full">
                <label className="text-xs text-info">TP Price(OPT)</label>
                <div className="relative flex items-center mt-1">
                  <input
                    type="number"
                    className="w-full py-1 pl-2 text-base text-white border border-opacity-25 rounded-sm placeholder-info focus:outline-none focus:ring-0 focus:border-orange border-info bg-main"
                  ></input>
                  <span className="absolute right-0 mr-3 text-xs text-info">
                    USDT
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex mt-2">
            <div className="text-xs text-info">Use the original BTC </div>
            <div class="flex items-center ml-8">
              <label for="toogleB" class="flex items-center cursor-pointer">
                <div class="relative">
                  <input id="toogleB" type="checkbox" class="sr-only" />
                  <div class="switch w-7 h-3 bg-info bg-opacity-40 rounded-full shadow-inner"></div>
                  <div class="dot absolute w-5 h-5 bg-info  rounded-full shadow -left-1 -top-1 transition"></div>
                </div>
              </label>
            </div>
          </div>
          <div style={{ marginTop: "0.6rem" }}>
            <button
              className="w-full py-1 text-center text-white rounded-sm bg-orange"
              type="button"
            >
              Log in or Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div className="w-full h-full bg-main">
        <div className="pt-2 bg-third">
          <ul className="flex px-6 space-x-6 text-info">
            <li
              onClick={() => chooseTab("Limit")}
              className={` cursor-pointer ${
                tabSelect === "Limit" && "border-orange text-white border-b-2"
              }`}
            >
              Limit
            </li>
            <li
              onClick={() => chooseTab("Markets")}
              className={` cursor-pointer ${
                tabSelect === "Markets" && "border-orange text-white border-b-2"
              }`}
            >
              Markets
            </li>
            <li
              onClick={() => chooseTab("Grid Trading")}
              className={` cursor-pointer ${
                tabSelect === "Grid Trading" &&
                "border-orange text-white border-b-2"
              }`}
            >
              Grid Trading
            </li>
          </ul>
        </div>
        {tabSelect === "Limit"
          ? limit
          : tabSelect === "Markets"
          ? market
          : gridTrading}
      </div>
    </>
  );
};

export default Exchange;
