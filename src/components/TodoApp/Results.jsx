import React, { useState, useEffect } from "react";
import { useTable, useSortBy } from "react-table";
import { DataGrid, GridColDef, GridApi, GridCellValue } from '@mui/x-data-grid'
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom' 
import {
  Button,
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
} from "@mui/material";
import { openController } from "./Constant";
import AuthenticationService from "./AuthenticationService";
import withNavigation from './WithNavigation.jsx'
import LoginComponent from "./LoginComponent.jsx";
import clsx from "clsx";


const Results = () => {
  const [Users, fetchUsers] = useState([])

  const getData = () => {
    AuthenticationService.executeopenController(`${openController}`)
    .then((response) => {fetchUsers(response.data) })
    .catch((error) => {console.log('problem in retiving winners list');});
  
  }




  useEffect(() => {
    getData()
  }, [])
  console.log(Users)

  const LoginComponentWithNavigation = withNavigation(LoginComponent);
  const columns1 = [
    { field: 'drawTime', headerName: 'Time', width: 100, headerAlign: 'center', align: 'center'},
    { field: 'date', headerName: 'Date', width: 100 , headerAlign: 'center', align: 'center'},
    { field: '_1_100', headerName: '0000-0099', width: 110, headerAlign: 'center', align: 'center',cellClassName: (params) => {
      if (params.value == null) {
        return "";
      }

      return clsx("super-app", {
        col1: params.value > 0 || params.value,
      });
    }, },
    { field: '_101_200', headerName: '0100-0199', width: 110, headerAlign: 'center', align: 'center',cellClassName: (params) => {
      if (params.value == null) {
        return "";
      }

      return clsx("super-app", {
        col1: params.value > 0 || params.value,
      });
    }, },
    { field: '_201_300', headerName: '0200-0299', width: 110, headerAlign: 'center', align: 'center',cellClassName: (params) => {
      if (params.value == null) {
        return "";
      }

      return clsx("super-app", {
        col1: params.value > 0 || params.value ,
      });
    },},
    { field: '_301_400', headerName: '0300-0399', width: 110, headerAlign: 'center', align: 'center',cellClassName: (params) => {
      if (params.value == null) {
        return "";
      }

      return clsx("super-app", {
        col1: params.value > 0 || params.value ,
      });
    },},
    { field: '_401_500', headerName: '0400-0499', width: 110, headerAlign: 'center', align: 'center',cellClassName: (params) => {
      if (params.value == null) {
        return "";
      }

      return clsx("super-app", {
        col1: params.value > 0 || params.value ,
      });
    },},
    { field: '_501_600', headerName: '0500-0599', width: 110, headerAlign: 'center', align: 'center',cellClassName: (params) => {
      if (params.value == null) {
        return "";
      }

      return clsx("super-app", {
        col1: params.value > 0 || params.value ,
      });
    },},
    { field: '_601_700', headerName: '0600-0699', width: 110, headerAlign: 'center', align: 'center',cellClassName: (params) => {
      if (params.value == null) {
        return "";
      }

      return clsx("super-app", {
        col1: params.value > 0 || params.value ,
      });
    },},
    { field: '_701_800', headerName: '0700-0799', width: 110, headerAlign: 'center', align: 'center',cellClassName: (params) => {
      if (params.value == null) {
        return "";
      }

      return clsx("super-app", {
        col1: params.value > 0 || params.value ,
      });
    },},
    { field: '_801_900', headerName: '0800-0899', width: 110, headerAlign: 'center', align: 'center',cellClassName: (params) => {
      if (params.value == null) {
        return "";
      }

      return clsx("super-app", {
        col1: params.value > 0 || params.value ,
      });
    },},
    { field: '_901_1000', headerName: '0900-0999', width: 110, headerAlign: 'center', align: 'center',cellClassName: (params) => {
      if (params.value == null) {
        return "";
      }

      return clsx("super-app", {
        col1: params.value > 0 || params.value ,
      });
    },},
    { field: '_1001_1100', headerName: '1000-1099', width: 110, headerAlign: 'center', align: 'center',cellClassName: (params) => {
      if (params.value == null) {
        return "";
      }

      return clsx("super-app", {
        col2: params.value > 0 || params.value ,
      });
    },},
    { field: '_1101_1200', headerName: '1100-1199', width: 110, headerAlign: 'center', align: 'center',cellClassName: (params) => {
      if (params.value == null) {
        return "";
      }

      return clsx("super-app", {
        col2: params.value > 0 || params.value ,
      });
    },},
    { field: '_1201_1300', headerName: '1200-1299', width: 110, headerAlign: 'center', align: 'center',cellClassName: (params) => {
      if (params.value == null) {
        return "";
      }

      return clsx("super-app", {
        col2: params.value > 0 || params.value ,
      });
    },},
    { field: '_1301_1400', headerName: '1300-1399', width: 110, headerAlign: 'center', align: 'center',cellClassName: (params) => {
      if (params.value == null) {
        return "";
      }

      return clsx("super-app", {
        col2: params.value > 0 || params.value ,
      });
    },},
    { field: '_1401_1500', headerName: '1400-1499', width: 110, headerAlign: 'center', align: 'center',cellClassName: (params) => {
      if (params.value == null) {
        return "";
      }

      return clsx("super-app", {
        col2: params.value > 0 || params.value ,
      });
    },},
    { field: '_1501_1600', headerName: '1500-1599', width: 110, headerAlign: 'center', align: 'center',cellClassName: (params) => {
      if (params.value == null) {
        return "";
      }

      return clsx("super-app", {
        col2: params.value > 0 || params.value ,
      });
    },},
    { field: '_1601_1700', headerName: '1600-1699', width: 110, headerAlign: 'center', align: 'center',cellClassName: (params) => {
      if (params.value == null) {
        return "";
      }

      return clsx("super-app", {
        col2: params.value > 0 || params.value ,
      });
    },},
    { field: '_1701_1800', headerName: '1700-1799', width: 110, headerAlign: 'center', align: 'center',cellClassName: (params) => {
      if (params.value == null) {
        return "";
      }

      return clsx("super-app", {
        col2: params.value > 0 || params.value ,
      });
    },},
    { field: '_1801_1900', headerName: '1800-1899', width: 110, headerAlign: 'center', align: 'center',cellClassName: (params) => {
      if (params.value == null) {
        return "";
      }

      return clsx("super-app", {
        col2: params.value > 0 || params.value ,
      });
    },},
    { field: '_1901_2000', headerName: '1900-1999', width: 110, headerAlign: 'center', align: 'center',cellClassName: (params) => {
      if (params.value == null) {
        return "";
      }

      return clsx("super-app", {
        col2: params.value > 0 || params.value ,
      });
    },},
    
    
    
    { field: '_2001_2100', headerName: '2000-2099', width: 110, headerAlign: 'center', align: 'center',cellClassName: (params) => {
      if (params.value == null) {
        return "";
      }

      return clsx("super-app", {
        col3: params.value > 0 || params.value ,
      });
    },},
    { field: '_2101_2200', headerName: '2100-2199', width: 110, headerAlign: 'center', align: 'center',cellClassName: (params) => {
      if (params.value == null) {
        return "";
      }

      return clsx("super-app", {
        col3: params.value > 0 || params.value ,
      });
    },},
    { field: '_2201_2300', headerName: '2200-2299', width: 110, headerAlign: 'center', align: 'center',cellClassName: (params) => {
      if (params.value == null) {
        return "";
      }

      return clsx("super-app", {
        col3: params.value > 0 || params.value ,
      });
    },},
    { field: '_2301_2400', headerName: '2300-2399', width: 110, headerAlign: 'center', align: 'center',cellClassName: (params) => {
      if (params.value == null) {
        return "";
      }

      return clsx("super-app", {
        col3: params.value > 0 || params.value ,
      });
    },},
    { field: '_2401_2500', headerName: '2400-2499', width: 110, headerAlign: 'center', align: 'center',cellClassName: (params) => {
      if (params.value == null) {
        return "";
      }

      return clsx("super-app", {
        col3: params.value > 0 || params.value ,
      });
    },},
    { field: '_2501_2600', headerName: '2500-2599', width: 110, headerAlign: 'center', align: 'center',cellClassName: (params) => {
      if (params.value == null) {
        return "";
      }

      return clsx("super-app", {
        col3: params.value > 0 || params.value ,
      });
    },},
    { field: '_2601_2700', headerName: '2600-2699', width: 110, headerAlign: 'center', align: 'center',cellClassName: (params) => {
      if (params.value == null) {
        return "";
      }

      return clsx("super-app", {
        col3: params.value > 0 || params.value ,
      });
    },},
    { field: '_2701_2800', headerName: '2700-2799', width: 110, headerAlign: 'center', align: 'center',cellClassName: (params) => {
      if (params.value == null) {
        return "";
      }

      return clsx("super-app", {
        col3: params.value > 0 || params.value ,
      });
    },},
    { field: '_2801_2900', headerName: '2800-2899', width: 110, headerAlign: 'center', align: 'center',cellClassName: (params) => {
      if (params.value == null) {
        return "";
      }

      return clsx("super-app", {
        col3: params.value > 0 || params.value ,
      });
    },},
    { field: '_2901_3000', headerName: '2900-2999', width: 110, headerAlign: 'center', align: 'center',cellClassName: (params) => {
      if (params.value == null) {
        return "";
      }

      return clsx("super-app", {
        col3: params.value > 0 || params.value ,
      });
    },},
    
    
    
    { field: '_3001_3100', headerName: '3000-3099', width: 110, headerAlign: 'center', align: 'center',cellClassName: (params) => {
      if (params.value == null) {
        return "";
      }

      return clsx("super-app", {
        col4: params.value > 0 || params.value ,
      });
    },},
    { field: '_3101_3200', headerName: '3100-3199', width: 110, headerAlign: 'center', align: 'center',cellClassName: (params) => {
      if (params.value == null) {
        return "";
      }

      return clsx("super-app", {
        col4: params.value > 0 || params.value ,
      });
    },},
    { field: '_3201_3300', headerName: '3200-3299', width: 110, headerAlign: 'center', align: 'center',cellClassName: (params) => {
      if (params.value == null) {
        return "";
      }

      return clsx("super-app", {
        col4: params.value > 0 || params.value ,
      });
    },},
    { field: '_3301_3400', headerName: '3300-3399', width: 110, headerAlign: 'center', align: 'center',cellClassName: (params) => {
      if (params.value == null) {
        return "";
      }

      return clsx("super-app", {
        col4: params.value > 0 || params.value ,
      });
    },},
    { field: '_3401_3500', headerName: '3400-3499', width: 110, headerAlign: 'center', align: 'center',cellClassName: (params) => {
      if (params.value == null) {
        return "";
      }

      return clsx("super-app", {
        col4: params.value > 0 || params.value ,
      });
    },},
    { field: '_3501_3600', headerName: '3500-3599', width: 110, headerAlign: 'center', align: 'center',cellClassName: (params) => {
      if (params.value == null) {
        return "";
      }

      return clsx("super-app", {
        col4: params.value > 0 || params.value ,
      });
    },},
    { field: '_3601_3700', headerName: '3600-3699', width: 110, headerAlign: 'center', align: 'center',cellClassName: (params) => {
      if (params.value == null) {
        return "";
      }

      return clsx("super-app", {
        col4: params.value > 0 || params.value ,
      });
    },},
    { field: '_3701_3800', headerName: '3700-3799', width: 110, headerAlign: 'center', align: 'center',cellClassName: (params) => {
      if (params.value == null) {
        return "";
      }

      return clsx("super-app", {
        col4: params.value > 0 || params.value ,
      });
    },},
    { field: '_3801_3900', headerName: '3800-3899', width: 110, headerAlign: 'center', align: 'center',cellClassName: (params) => {
      if (params.value == null) {
        return "";
      }

      return clsx("super-app", {
        col4: params.value > 0 || params.value ,
      });
    },},
    { field: '_3901_4000', headerName: '3900-3999', width: 110, headerAlign: 'center', align: 'center',cellClassName: (params) => {
      if (params.value == null) {
        return "";
      }

      return clsx("super-app", {
        col4: params.value > 0 || params.value ,
      });
    },},
    
    
    { field: '_4001_4100', headerName: '4000-4099', width: 110, headerAlign: 'center', align: 'center',cellClassName: (params) => {
      if (params.value == null) {
        return "";
      }

      return clsx("super-app", {
        col4: params.value > 0 || params.value ,
      });
    },},
    { field: '_4101_4200', headerName: '4100-4199', width: 110, headerAlign: 'center', align: 'center',cellClassName: (params) => {
      if (params.value == null) {
        return "";
      }

      return clsx("super-app", {
        col5: params.value > 0 || params.value ,
      });
    },},
    { field: '_4201_4300', headerName: '4200-4299', width: 110, headerAlign: 'center', align: 'center',cellClassName: (params) => {
      if (params.value == null) {
        return "";
      }

      return clsx("super-app", {
        col5: params.value > 0 || params.value ,
      });
    },},
    { field: '_4301_4400', headerName: '4300-4399', width: 110, headerAlign: 'center', align: 'center',cellClassName: (params) => {
      if (params.value == null) {
        return "";
      }

      return clsx("super-app", {
        col5: params.value > 0 || params.value ,
      });
    },},
    { field: '_4401_4500', headerName: '4400-4499', width: 110, headerAlign: 'center', align: 'center',cellClassName: (params) => {
      if (params.value == null) {
        return "";
      }

      return clsx("super-app", {
        col5: params.value > 0 || params.value ,
      });
    },},
    { field: '_4501_4600', headerName: '4500-4599', width: 110, headerAlign: 'center', align: 'center',cellClassName: (params) => {
      if (params.value == null) {
        return "";
      }

      return clsx("super-app", {
        col5: params.value > 0 || params.value ,
      });
    },},
    { field: '_4601_4700', headerName: '4600-4699', width: 110, headerAlign: 'center', align: 'center',cellClassName: (params) => {
      if (params.value == null) {
        return "";
      }

      return clsx("super-app", {
        col5: params.value > 0 || params.value ,
      });
    },},
    { field: '_4701_4800', headerName: '4700-4799', width: 110, headerAlign: 'center', align: 'center',cellClassName: (params) => {
      if (params.value == null) {
        return "";
      }

      return clsx("super-app", {
        col5: params.value > 0 || params.value ,
      });
    },},
    { field: '_4801_4900', headerName: '4800-4899', width: 110, headerAlign: 'center', align: 'center',cellClassName: (params) => {
      if (params.value == null) {
        return "";
      }

      return clsx("super-app", {
        col5: params.value > 0 || params.value ,
      });
    },},
    { field: '_4901_5000', headerName: '4900-4999', width: 110, headerAlign: 'center', align: 'center',cellClassName: (params) => {
      if (params.value == null) {
        return "";
      }

      return clsx("super-app", {
        col5: params.value > 0 || params.value ,
      });
    },},
    
    
    { field: '_5001_5100', headerName: '5000-5099', width: 110, headerAlign: 'center', align: 'center',cellClassName: (params) => {
      if (params.value == null) {
        return "";
      }

      return clsx("super-app", {
        col1: params.value > 0 || params.value ,
      });
    },},
    { field: '_5101_5200', headerName: '5100-5199', width: 110, headerAlign: 'center', align: 'center',cellClassName: (params) => {
      if (params.value == null) {
        return "";
      }

      return clsx("super-app", {
        col1: params.value > 0 || params.value ,
      });
    },},
    { field: '_5201_5300', headerName: '5200-5299', width: 110, headerAlign: 'center', align: 'center',cellClassName: (params) => {
      if (params.value == null) {
        return "";
      }

      return clsx("super-app", {
        col1: params.value > 0 || params.value ,
      });
    },},
    { field: '_5301_5400', headerName: '5300-5399', width: 110, headerAlign: 'center', align: 'center',cellClassName: (params) => {
      if (params.value == null) {
        return "";
      }

      return clsx("super-app", {
        col1: params.value > 0 || params.value ,
      });
    },},
    { field: '_5401_5500', headerName: '5400-5499', width: 110, headerAlign: 'center', align: 'center',cellClassName: (params) => {
      if (params.value == null) {
        return "";
      }

      return clsx("super-app", {
        col1: params.value > 0 || params.value ,
      });
    },},
    { field: '_5501_5600', headerName: '5500-5599', width: 110, headerAlign: 'center', align: 'center',cellClassName: (params) => {
      if (params.value == null) {
        return "";
      }

      return clsx("super-app", {
        col1: params.value > 0 || params.value ,
      });
    },},
    { field: '_5601_5700', headerName: '5600-5699', width: 110, headerAlign: 'center', align: 'center',cellClassName: (params) => {
      if (params.value == null) {
        return "";
      }

      return clsx("super-app", {
        col1: params.value > 0 || params.value ,
      });
    },},
    { field: '_5701_5800', headerName: '5700-5799', width: 110, headerAlign: 'center', align: 'center',cellClassName: (params) => {
      if (params.value == null) {
        return "";
      }

      return clsx("super-app", {
        col1: params.value > 0 || params.value ,
      });
    },},
    { field: '_5801_5900', headerName: '5800-5899', width: 110, headerAlign: 'center', align: 'center',cellClassName: (params) => {
      if (params.value == null) {
        return "";
      }

      return clsx("super-app", {
        col1: params.value > 0 || params.value ,
      });
    },},
    { field: '_5901_6000', headerName: '5900-5999', width: 110, headerAlign: 'center', align: 'center',cellClassName: (params) => {
      if (params.value == null) {
        return "";
      }

      return clsx("super-app", {
        col1: params.value > 0 || params.value ,
      });
    },},
    
    
    
    { field: '_6001_6100', headerName: '6000-6099', width: 110, headerAlign: 'center', align: 'center',cellClassName: (params) => {
      if (params.value == null) {
        return "";
      }

      return clsx("super-app", {
        col2: params.value > 0 || params.value ,
      });
    },},
    { field: '_6101_6200', headerName: '6100-6199', width: 110, headerAlign: 'center', align: 'center',cellClassName: (params) => {
      if (params.value == null) {
        return "";
      }

      return clsx("super-app", {
        col2: params.value > 0 || params.value ,
      });
    },},
    { field: '_6201_6300', headerName: '6200-6299', width: 110, headerAlign: 'center', align: 'center',cellClassName: (params) => {
      if (params.value == null) {
        return "";
      }

      return clsx("super-app", {
        col2: params.value > 0 || params.value ,
      });
    },},
    { field: '_6301_6400', headerName: '6300-6399', width: 110, headerAlign: 'center', align: 'center',cellClassName: (params) => {
      if (params.value == null) {
        return "";
      }

      return clsx("super-app", {
        col2: params.value > 0 || params.value ,
      });
    },},
    { field: '_6401_6500', headerName: '6400-6499', width: 110, headerAlign: 'center', align: 'center',cellClassName: (params) => {
      if (params.value == null) {
        return "";
      }

      return clsx("super-app", {
        col2: params.value > 0 || params.value ,
      });
    },},
    { field: '_6501_6600', headerName: '6500-6599', width: 110, headerAlign: 'center', align: 'center',cellClassName: (params) => {
      if (params.value == null) {
        return "";
      }

      return clsx("super-app", {
        col2: params.value > 0 || params.value ,
      });
    },},
    { field: '_6601_6700', headerName: '6600-6699', width: 110, headerAlign: 'center', align: 'center',cellClassName: (params) => {
      if (params.value == null) {
        return "";
      }

      return clsx("super-app", {
        col2: params.value > 0 || params.value ,
      });
    },},
    { field: '_6701_6800', headerName: '6700-6799', width: 110, headerAlign: 'center', align: 'center',cellClassName: (params) => {
      if (params.value == null) {
        return "";
      }

      return clsx("super-app", {
        col2: params.value > 0 || params.value ,
      });
    },},
    { field: '_6801_6900', headerName: '6800-6899', width: 110, headerAlign: 'center', align: 'center',cellClassName: (params) => {
      if (params.value == null) {
        return "";
      }

      return clsx("super-app", {
        col2: params.value > 0 || params.value ,
      });
    },},
    { field: '_6901_7000', headerName: '6900-6999', width: 110, headerAlign: 'center', align: 'center',cellClassName: (params) => {
      if (params.value == null) {
        return "";
      }

      return clsx("super-app", {
        col2: params.value > 0 || params.value ,
      });
    },},
    
    
    { field: '_7001_7100', headerName: '7000-7099', width: 110, headerAlign: 'center', align: 'center',cellClassName: (params) => {
      if (params.value == null) {
        return "";
      }

      return clsx("super-app", {
        col3: params.value > 0 || params.value ,
      });
    },},
    { field: '_7101_7200', headerName: '7100-7199', width: 110, headerAlign: 'center', align: 'center',cellClassName: (params) => {
      if (params.value == null) {
        return "";
      }

      return clsx("super-app", {
        col3: params.value > 0 || params.value ,
      });
    },},
    { field: '_7201_7300', headerName: '7200-7299', width: 110, headerAlign: 'center', align: 'center',cellClassName: (params) => {
      if (params.value == null) {
        return "";
      }

      return clsx("super-app", {
        col3: params.value > 0 || params.value ,
      });
    },},
    { field: '_7301_7400', headerName: '7300-7399', width: 110, headerAlign: 'center', align: 'center',cellClassName: (params) => {
      if (params.value == null) {
        return "";
      }

      return clsx("super-app", {
        col3: params.value > 0 || params.value ,
      });
    },},
    { field: '_7401_7500', headerName: '7400-7499', width: 110, headerAlign: 'center', align: 'center',cellClassName: (params) => {
      if (params.value == null) {
        return "";
      }

      return clsx("super-app", {
        col3: params.value > 0 || params.value ,
      });
    },},
    { field: '_7501_7600', headerName: '7500-7599', width: 110, headerAlign: 'center', align: 'center',cellClassName: (params) => {
      if (params.value == null) {
        return "";
      }

      return clsx("super-app", {
        col3: params.value > 0 || params.value ,
      });
    },},
    { field: '_7601_7700', headerName: '7600-7699', width: 110, headerAlign: 'center', align: 'center',cellClassName: (params) => {
      if (params.value == null) {
        return "";
      }

      return clsx("super-app", {
        col3: params.value > 0 || params.value ,
      });
    },},
    { field: '_7701_7800', headerName: '7700-7799', width: 110, headerAlign: 'center', align: 'center',cellClassName: (params) => {
      if (params.value == null) {
        return "";
      }

      return clsx("super-app", {
        col3: params.value > 0 || params.value ,
      });
    },},
    { field: '_7801_7900', headerName: '7800-7899', width: 110, headerAlign: 'center', align: 'center',cellClassName: (params) => {
      if (params.value == null) {
        return "";
      }

      return clsx("super-app", {
        col3: params.value > 0 || params.value ,
      });
    },},
    { field: '_7901_8000', headerName: '7900-7999', width: 110, headerAlign: 'center', align: 'center',cellClassName: (params) => {
      if (params.value == null) {
        return "";
      }

      return clsx("super-app", {
        col3: params.value > 0 || params.value ,
      });
    },},
    
    
    
    { field: '_8001_8100', headerName: '8000-8099', width: 110, headerAlign: 'center', align: 'center',cellClassName: (params) => {
      if (params.value == null) {
        return "";
      }

      return clsx("super-app", {
        col4: params.value > 0 || params.value ,
      });
    },},
    { field: '_8101_8200', headerName: '8100-8199', width: 110, headerAlign: 'center', align: 'center',cellClassName: (params) => {
      if (params.value == null) {
        return "";
      }

      return clsx("super-app", {
        col4: params.value > 0 || params.value ,
      });
    },},
    { field: '_8201_8300', headerName: '8200-8299', width: 110, headerAlign: 'center', align: 'center',cellClassName: (params) => {
      if (params.value == null) {
        return "";
      }

      return clsx("super-app", {
        col4: params.value > 0 || params.value ,
      });
    },},
    { field: '_8301_8400', headerName: '8300-8399', width: 110, headerAlign: 'center', align: 'center',cellClassName: (params) => {
      if (params.value == null) {
        return "";
      }

      return clsx("super-app", {
        col4: params.value > 0 || params.value ,
      });
    },},
    { field: '_8401_8500', headerName: '8400-8499', width: 110, headerAlign: 'center', align: 'center',cellClassName: (params) => {
      if (params.value == null) {
        return "";
      }

      return clsx("super-app", {
        col4: params.value > 0 || params.value ,
      });
    },},
    { field: '_8501_8600', headerName: '8500-8599', width: 110, headerAlign: 'center', align: 'center',cellClassName: (params) => {
      if (params.value == null) {
        return "";
      }

      return clsx("super-app", {
        col4: params.value > 0 || params.value ,
      });
    },},
    { field: '_8601_8700', headerName: '8600-8699', width: 110, headerAlign: 'center', align: 'center',cellClassName: (params) => {
      if (params.value == null) {
        return "";
      }

      return clsx("super-app", {
        col4: params.value > 0 || params.value ,
      });
    },},
    { field: '_8701_8800', headerName: '8700-8799', width: 110, headerAlign: 'center', align: 'center',cellClassName: (params) => {
      if (params.value == null) {
        return "";
      }

      return clsx("super-app", {
        col4: params.value > 0 || params.value ,
      });
    },},
    { field: '_8801_8900', headerName: '8800-8899', width: 110, headerAlign: 'center', align: 'center',cellClassName: (params) => {
      if (params.value == null) {
        return "";
      }

      return clsx("super-app", {
        col4: params.value > 0 || params.value ,
      });
    },},
    { field: '_8901_9000', headerName: '8900-8999', width: 110, headerAlign: 'center', align: 'center',cellClassName: (params) => {
      if (params.value == null) {
        return "";
      }

      return clsx("super-app", {
        col4: params.value > 0 || params.value ,
      });
    },},
    
    
    
    { field: '_9001_9100', headerName: '9000-9099', width: 110, headerAlign: 'center', align: 'center',cellClassName: (params) => {
      if (params.value == null) {
        return "";
      }

      return clsx("super-app", {
        col5: params.value > 0 || params.value ,
      });
    },},
    { field: '_9101_9200', headerName: '9100-9199', width: 110, headerAlign: 'center', align: 'center',cellClassName: (params) => {
      if (params.value == null) {
        return "";
      }

      return clsx("super-app", {
        col5: params.value > 0 || params.value ,
      });
    },},
    { field: '_9201_9300', headerName: '9200-9299', width: 110, headerAlign: 'center', align: 'center',cellClassName: (params) => {
      if (params.value == null) {
        return "";
      }

      return clsx("super-app", {
        col5: params.value > 0 || params.value ,
      });
    },},
    { field: '_9301_9400', headerName: '9300-9399', width: 110, headerAlign: 'center', align: 'center',cellClassName: (params) => {
      if (params.value == null) {
        return "";
      }

      return clsx("super-app", {
        col5: params.value > 0 || params.value ,
      });
    },},
    { field: '_9401_9500', headerName: '9400-9499', width: 110, headerAlign: 'center', align: 'center',cellClassName: (params) => {
      if (params.value == null) {
        return "";
      }

      return clsx("super-app", {
        col5: params.value > 0 || params.value ,
      });
    },},
    { field: '_9501_9600', headerName: '9500-9599', width: 110, headerAlign: 'center', align: 'center',cellClassName: (params) => {
      if (params.value == null) {
        return "";
      }

      return clsx("super-app", {
        col5: params.value > 0 || params.value ,
      });
    },},
    { field: '_9601_9700', headerName: '9600-9699', width: 110, headerAlign: 'center', align: 'center',cellClassName: (params) => {
      if (params.value == null) {
        return "";
      }

      return clsx("super-app", {
        col5: params.value > 0 || params.value ,
      });
    },},
    { field: '_9701_9800', headerName: '9700-9799', width: 110, headerAlign: 'center', align: 'center',cellClassName: (params) => {
      if (params.value == null) {
        return "";
      }

      return clsx("super-app", {
        col5: params.value > 0 || params.value ,
      });
    },},
    { field: '_9801_9900', headerName: '9800-9899', width: 110, headerAlign: 'center', align: 'center',cellClassName: (params) => {
      if (params.value == null) {
        return "";
      }

      return clsx("super-app", {
        col5: params.value > 0 || params.value ,
      });
    },},
    { field: '_9901_10000', headerName: '9900-9999', width: 110, headerAlign: 'center', align: 'center',cellClassName: (params) => {
      if (params.value == null) {
        return "";
      }

      return clsx("super-app", {
        col5: params.value > 0 || params.value ,
      });
    },},
    
    
  ]

  return (
    <>
      <center>
        <Card style={{ width: "97%", marginTop: "5%" }}>
          <CardHeader title="Result" />
          <Button
            variant="contained"
            color="success"
            style={{ float:"right", marginRight: "5%" ,marginTop: "2%"}}
          >
          <Link to='/login' style={{color:'white'}}>
          Login</Link></Button>
          <Divider style={{marginBottom: "15px"}} />
          <CardContent className="table-responsive">
          <Box
          sx={{
            "& .super-app.col1": {
              backgroundColor: "rgba(157, 255, 118, 0.49)",
              color: "#1a3e72",
              fontWeight: "600",
            },
            "& .super-app.col2": {
              backgroundColor: "rgba(236, 160, 199, 0.22)",
              color: "#1a3e72",
              fontWeight: "600",
            },
            "& .super-app.col3": {
              backgroundColor: "rgba(255, 254, 148, 0.44)",
              color: "#1a3e72",
              fontWeight: "600",
            },
            "& .super-app.col4": {
              backgroundColor: "rgba(231, 202, 255, 0.44)",
              color: "#1a3e72",
              fontWeight: "600",
            },
            "& .super-app.col5": {
              backgroundColor: "rgba(255, 148, 148, 0.44)",
              color: "#1a3e72",
              fontWeight: "600",
            },
          }}
          >
          <DataGrid
                      getRowId={(row) => row.drawTime}
                      autoHeight {...Users}
                      rows={Users}
                      columns={columns1}
                      getRowClassName={(params) => `super-app-theme--${params.row.status}`}
                />
            </Box>
          </CardContent>
        </Card>
        <Routes>
                       
              <Route path="/login" exact element={<LoginComponentWithNavigation />}/> 
        </Routes>
      </center>
    </>
  );
};

export default Results;
