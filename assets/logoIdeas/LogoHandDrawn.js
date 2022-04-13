import { useState, createRef, useEffect } from 'react'
import styled                             from 'styled-components'
import { useInView }                      from 'react-intersection-observer'

export const SvgComponent = (props) => {
	const [inViewRef, inView] = useInView({
		                                      triggerOnce: true,                                 })
	const pathRef = createRef()
	const [pathLength, setPathLength] = useState()

	useEffect(() => {
		if (pathRef.current) {
			setPathLength(pathRef.current.getTotalLength())
		}
	}, [pathRef])

	return (
		<Wrapper ref={ inViewRef } pathLength={ pathLength }>

			<svg xmlns="http://www.w3.org/2000/svg" width="3509" height="2481">
			<path style="fill:#ffffff; stroke:none;" d="M0 0L0 2481L3509 2481L3509 0L0 0z"/>
			<path style="fill:#393937; stroke:none;" d="M1490 1007L1490 1218L1502 1218L1502 1007L1490 1007M1633 1007L1633 1217L1645 1216L1645 1007L1633 1007M2498.04 1009.74C2486.7 1014.35 2494.47 1032.59 2505.98 1028.11C2517.91 1023.47 2510.19 1004.81 2498.04 1009.74z"/>
			<path style="fill:#f7e939; stroke:none;" d="M232 1070L232 1314L510 1314L510 1070L232 1070z"/>
			<path style="fill:#393937; stroke:none;" d="M2058 1140L2057 1140L2057 1090L2045 1090L2045 1203L2057 1204C2057 1176.96 2060.58 1151.17 2077.5 1129C2109.92 1086.53 2170.81 1084.19 2206.91 1123C2233.65 1151.75 2233 1186.37 2233 1223L2246 1223C2246 1190.43 2244.2 1159.94 2264.04 1132C2298.79 1083.07 2367.03 1084.05 2401.84 1132C2420.04 1157.06 2421 1184.35 2421 1214C2423.97 1213.45 2428.99 1213.74 2431.4 1211.82C2435.45 1208.6 2433 1193.81 2433 1189C2433 1167.97 2427.93 1147.86 2416.56 1130C2387.6 1084.52 2322 1068.91 2277 1100.44C2257.82 1113.88 2248.61 1132.45 2239 1153C2216.97 1088.31 2130.63 1059.52 2079 1109.04C2070.4 1117.29 2061.36 1128.36 2058 1140M1769 1090L1769 1202L1781 1201L1781 1090L1769 1090M1974 1090L1974 1196L1986 1197L1986 1090L1974 1090M2496 1090L2496 1204L2506.97 1201.26L2508 1175L2508 1090L2496 1090z"/>
			<path style="fill:#f7e939; stroke:none;" d="M942 1220C945.338 1203.87 950.591 1188.33 953.246 1172C957.363 1146.67 959.866 1098.31 921 1107.5C916.051 1108.67 911.355 1110.6 907 1113.21C900.683 1117 895.2 1121.82 890 1127C859.705 1157.2 841.138 1198.22 822.247 1236C812.989 1254.52 805.141 1275.6 791 1291C787.446 1276.07 793.98 1259.06 798.667 1245C808.601 1215.2 820.282 1185.85 832.719 1157C838.233 1144.21 854.781 1116.66 846.911 1103C833.096 1079.03 805.367 1105.72 797.782 1120C774.261 1164.27 762 1216.02 762 1266C762 1280.9 763.259 1312.3 782 1316.61C804.715 1321.82 818.994 1291.76 826.691 1275C844.507 1236.2 863.239 1196.9 888.141 1162C894.748 1152.74 907.207 1131.5 919.985 1130.76C924.909 1130.48 926.861 1136.01 927.518 1140C929.069 1149.43 924.739 1161.1 921.974 1170C912.174 1201.54 896.238 1232.14 878.681 1260C874.038 1267.37 862.267 1282.71 873.109 1290.26C883.781 1297.68 899.899 1287.49 907.999 1281C933.648 1260.44 953.63 1233.37 983 1217C980.194 1223 978.027 1229.41 977.159 1236C976.381 1241.91 976.038 1247.1 977.084 1253C982.414 1283.08 1016.52 1285.71 1041 1281.56C1087.41 1273.71 1123.63 1234.63 1155 1203C1154.76 1214.83 1153.32 1226.15 1155 1238C1159.68 1270.98 1190.88 1285.49 1219 1266.64C1242.96 1250.57 1258.01 1223.49 1273.67 1200C1282.99 1186.01 1294.52 1172.03 1302 1157L1303 1157C1298.88 1189.4 1290.29 1222.33 1282.37 1254C1278.36 1270.06 1275.75 1289.09 1268.45 1304C1258.32 1324.66 1238.41 1343.19 1225 1362C1191.9 1408.43 1158.8 1455.89 1133.25 1507C1119.17 1535.15 1104.63 1564.35 1100.84 1596C1099.17 1609.97 1099.49 1627.59 1113 1636.01C1125.21 1643.61 1143.07 1637.33 1154 1630.3C1180.41 1613.32 1200.43 1582.84 1215.72 1556C1244.53 1505.44 1265.65 1450.12 1280.85 1394C1286.14 1374.45 1291.21 1354.78 1295.58 1335C1297.33 1327.04 1297.5 1313.81 1302.56 1307.29C1319.94 1284.91 1358.91 1273.23 1386 1272.04C1419.36 1270.58 1455.3 1278.21 1488 1269.71C1503.77 1265.62 1518.79 1260.91 1533 1252.72C1539.94 1248.71 1548.13 1239.36 1556 1238.15C1595.83 1232.01 1637.81 1235.72 1678 1231.83C1711.1 1228.63 1743.91 1221.48 1777 1218.17C1817.54 1214.12 1858.33 1212.82 1899 1211.04C1982.25 1207.39 2064.56 1225 2147 1233.83C2217.68 1241.41 2288.07 1242.77 2359 1237.91C2437.31 1232.54 2515.04 1218.2 2593 1208.84C2611.68 1206.6 2630.39 1204.12 2649 1201.42C2656.19 1200.38 2665.11 1197.54 2661.4 1188.04C2657.43 1177.92 2632.14 1185.87 2624 1186.84C2585.47 1191.47 2544.86 1194.16 2507 1202.65C2485.13 1207.56 2461.31 1208.12 2439 1211.29C2373.46 1220.58 2305.36 1226.87 2239 1223.96C2162.09 1220.59 2085.36 1207.75 2009 1198.71C1928.39 1189.17 1846.39 1194.52 1766 1202.17C1699.06 1208.54 1633.42 1220 1566 1220C1568.49 1213.53 1570.44 1206.97 1570.91 1200C1573.53 1161.07 1532.14 1149.62 1502 1144L1502 1162C1517.77 1164.97 1536.65 1168.8 1547.32 1182.04C1555.04 1191.63 1555.55 1213.29 1542.96 1219.97C1538.01 1222.59 1529.46 1221 1524 1221C1507.5 1221 1490.26 1220.77 1474 1217.74C1458.82 1214.91 1426.69 1203.11 1431.83 1182C1437.03 1160.64 1472.75 1157.8 1490 1161L1490 1143C1471.1 1143 1452.03 1142.15 1435 1151.87C1406.86 1167.94 1408.89 1201.52 1433 1220.48C1456.81 1239.21 1492.36 1238 1521 1238L1521 1239C1503.18 1246.41 1487.49 1252.97 1468 1254.83C1411.18 1260.26 1356.37 1244.41 1306 1281C1313.48 1242.42 1320.04 1202.31 1321.01 1163C1321.25 1153.74 1326.74 1119.85 1307 1128.65C1296.15 1133.49 1289.36 1149.9 1282.35 1159C1265.13 1181.35 1246.16 1201.86 1227.58 1223C1220.87 1230.62 1212.42 1238.25 1204 1243.95C1201.16 1245.87 1196.75 1248.87 1193.23 1246.93C1189.56 1244.91 1189.84 1239.55 1190.17 1236C1191.06 1226.49 1192.94 1217.13 1195.72 1208C1204.56 1178.98 1222.4 1154.13 1232.94 1126C1237.07 1114.97 1236.25 1099.85 1225 1093.37C1202.04 1080.15 1184.47 1115.8 1177.42 1132C1173.63 1140.72 1171.11 1150.97 1166.03 1159C1147.7 1188.02 1115.98 1215.55 1089 1236.35C1073.71 1248.13 1054.82 1261.74 1035 1263.83C1021.98 1265.2 1013.16 1255.62 1013 1243C1012.78 1224.63 1019.1 1206.81 1026.01 1190C1028.95 1182.87 1034.04 1171.21 1023.98 1167.15C1014.16 1163.18 1002.82 1169.12 995 1174.75C976.11 1188.33 959.996 1205.34 942 1220z"/>
			<path style="fill:#ffffff; stroke:none;" d="M2057 1204C2113.79 1214.55 2175.27 1223 2233 1223C2233 1186.08 2233.91 1150.99 2206.91 1122C2171.57 1084.05 2109.17 1086.52 2077.5 1128C2060.33 1150.5 2057 1176.6 2057 1204M2246 1224L2351 1220.91L2421 1214C2421 1184.01 2420.26 1156.37 2401.84 1131C2367.92 1084.27 2299.32 1083 2264.76 1130C2243.78 1158.53 2246 1190.48 2246 1224z"/>
			<path style="fill:#7f7e6a; stroke:none;" d="M1490 1143L1491 1144L1490 1143z"/>
			<path style="fill:#afaa70; stroke:none;" d="M1490 1144L1490 1160L1491 1160L1490 1144z"/>
			<path style="fill:#ffffff; stroke:none;" d="M1502 1162L1502 1218L1490 1218L1490 1177C1490 1173.13 1491.54 1164.92 1488.97 1161.74C1486.27 1158.4 1476.83 1159.87 1473 1160.04C1458.77 1160.66 1433.65 1165.49 1431.37 1183C1429.94 1193.99 1440.24 1204.86 1449 1209.69C1468.88 1220.64 1494.88 1221 1517 1221C1524.24 1221 1537.46 1223.54 1543.9 1219.97C1547.35 1218.06 1549.19 1213.46 1550.66 1210C1558.64 1191.3 1546.55 1176.77 1530 1169.31C1521.22 1165.36 1511.51 1163.21 1502 1162z"/>
			<path style="fill:#7f7e6a; stroke:none;" d="M1490 1160L1491 1161L1490 1160z"/>
			<path style="fill:#afaa70; stroke:none;" d="M1975 1196L1975 1197L1979 1197L1975 1196z"/>
			<path style="fill:#7f7e6a; stroke:none;" d="M1979 1196L1979 1197L1983 1197L1979 1196M1773 1201L1773 1202L1776 1202L1773 1201z"/>
			<path style="fill:#afaa70; stroke:none;" d="M1776 1201L1776 1202L1780 1202L1776 1201z"/>
			<path style="fill:#7f7e6a; stroke:none;" d="M2506.67 1202.33L2507.33 1202.67L2506.67 1202.33z"/>
			<path style="fill:#afaa70; stroke:none;" d="M2046 1203L2046 1204L2050 1204L2046 1203z"/>
			<path style="fill:#7f7e6a; stroke:none;" d="M2050.67 1203.33L2051.33 1203.67L2050.67 1203.33M2499 1203L2500 1204L2499 1203z"/>
			<path style="fill:#afaa70; stroke:none;" d="M2500 1203L2500 1204L2504 1204L2500 1203M2054 1204L2054 1205L2057 1205L2054 1204z"/>
			<path style="fill:#ffffff; stroke:none;" d="M1781 1218C1781 1246.29 1788.64 1274.3 1809.17 1294.83C1853.76 1339.42 1928.48 1327.59 1960.94 1275C1972.85 1255.7 1974 1235.01 1974 1213L1864 1212.04L1781 1218z"/>
			<path style="fill:#7f7e6a; stroke:none;" d="M2431.67 1212.33L2432.33 1212.67L2431.67 1212.33z"/>
			<path style="fill:#393937; stroke:none;" d="M1974 1213C1974 1234.28 1972.72 1254.21 1961.55 1273C1929.48 1326.9 1854.03 1340.11 1809.17 1293.91C1789.18 1273.32 1781 1246.16 1781 1218C1778.07 1218.54 1771.99 1218.13 1770.03 1220.6C1766.83 1224.65 1769.49 1234.35 1769.93 1239C1771.72 1258.28 1777.85 1277.35 1789.48 1293C1823.27 1338.48 1890.62 1343.96 1937 1315.8C1950.52 1307.59 1967.23 1294.21 1973 1279L1974 1279L1974 1327L1986 1327L1986 1214L1974 1213z"/>
			<path style="fill:#7f7e6a; stroke:none;" d="M1975 1213L1975 1214L1979 1214L1975 1213z"/>
			<path style="fill:#afaa70; stroke:none;" d="M1979 1213L1979 1214L1985 1214L1979 1213z"/>
			<path style="fill:#7f7e6a; stroke:none;" d="M2423.67 1213.33L2424.33 1213.67L2423.67 1213.33z"/>
			<path style="fill:#afaa70; stroke:none;" d="M2425 1213L2425 1214L2429 1214L2425 1213z"/>
			<path style="fill:#7f7e6a; stroke:none;" d="M1640 1216L1640 1217L1644 1217L1640 1216z"/>
			<path style="fill:#afaa70; stroke:none;" d="M1644 1216L1645 1217L1644 1216M1634 1217L1635 1218L1634 1217M1774 1218L1774 1219L1777 1219L1774 1218z"/>
			<path style="fill:#7f7e6a; stroke:none;" d="M1777.67 1218.33L1778.33 1218.67L1777.67 1218.33z"/>
			<path style="fill:#afaa70; stroke:none;" d="M1769 1219L1770 1220L1769 1219M2507 1219L2508 1220L2507 1219z"/>
			<path style="fill:#ffffff; stroke:none;" d="M941 1220L942 1221L941 1220z"/>
			<path style="fill:#393937; stroke:none;" d="M2045 1220L2045 1328L2057 1328L2057 1253L2056.4 1223.43L2045 1220z"/>
			<path style="fill:#7f7e6a; stroke:none;" d="M2047 1220L2048 1221L2047 1220z"/>
			<path style="fill:#afaa70; stroke:none;" d="M2048 1220L2048 1221L2051 1221L2048 1220M2500.67 1220.33L2501.33 1220.67L2500.67 1220.33z"/>
			<path style="fill:#7f7e6a; stroke:none;" d="M2502.67 1220.33L2503.33 1220.67L2502.67 1220.33z"/>
			<path style="fill:#393937; stroke:none;" d="M2496 1221L2496 1328L2508 1328L2508 1220L2496 1221z"/>
			<path style="fill:#7f7e6a; stroke:none;" d="M2055 1221L2056 1222L2055 1221z"/>
			<path style="fill:#afaa70; stroke:none;" d="M2056 1221L2057 1222L2056 1221M2234 1223L2234 1224L2237 1224L2234 1223z"/>
			<path style="fill:#7f7e6a; stroke:none;" d="M2237 1223L2237 1224L2245 1224L2237 1223z"/>
			<path style="fill:#afaa70; stroke:none;" d="M2245 1223L2246 1224L2245 1223M2432 1229L2433 1230L2432 1229M2424 1230L2424 1231L2427 1231L2424 1230z"/>
			<path style="fill:#7f7e6a; stroke:none;" d="M2427.67 1230.33L2428.33 1230.67L2427.67 1230.33z"/>
			<path style="fill:#393937; stroke:none;" d="M2421 1231L2421 1328L2433 1328L2433 1230L2421 1231z"/>
			<path style="fill:#afaa70; stroke:none;" d="M1641 1233L1641 1234L1645 1234L1641 1233z"/>
			<path style="fill:#393937; stroke:none;" d="M1633 1234C1633 1255.63 1629.42 1280.17 1639.78 1300C1661.98 1342.48 1718.53 1342.82 1750 1312L1750 1311L1742 1303L1741 1303C1714.54 1329.24 1669.12 1329.62 1650.81 1293C1641.89 1275.15 1645 1253.33 1645 1234L1633 1234M1490 1237L1490 1251L1502 1248L1502 1238L1490 1237z"/>
			<path style="fill:#7f7e6a; stroke:none;" d="M1492 1237L1492 1238L1497 1238L1492 1237z"/>
			<path style="fill:#afaa70; stroke:none;" d="M1497 1237L1497 1238L1502 1238L1497 1237z"/>
			<path style="fill:#ffffff; stroke:none;" d="M1502 1238L1502 1247L1521 1239L1502 1238z"/>
			<path style="fill:#afaa70; stroke:none;" d="M2233 1240L2234 1241L2233 1240z"/>
			<path style="fill:#7f7e6a; stroke:none;" d="M2234 1240L2234 1241L2237 1241L2234 1240z"/>
			<path style="fill:#afaa70; stroke:none;" d="M2237 1240L2237 1241L2245 1241L2237 1240z"/>
			<path style="fill:#393937; stroke:none;" d="M2233 1241L2233 1328L2246 1328L2246 1241L2233 1241z"/>
			<path style="fill:#afaa70; stroke:none;" d="M1499.67 1248.33L1500.33 1248.67L1499.67 1248.33M1496.67 1249.33L1497.33 1249.67L1496.67 1249.33M1493.67 1250.33L1494.33 1250.67L1493.67 1250.33M1499 1266L1500 1267L1499 1266z"/>
			<path style="fill:#7f7e6a; stroke:none;" d="M1500 1266L1501 1267L1500 1266z"/>
			<path style="fill:#393937; stroke:none;" d="M1501 1266L1490 1269C1490.03 1310.63 1526.67 1339.03 1567 1333.27C1581.15 1331.25 1600.53 1323.86 1607 1310L1599 1303L1598 1303C1574.68 1326.26 1535.66 1330.69 1513.9 1302C1505.1 1290.39 1506.32 1278.34 1501 1266z"/>
			<path style="fill:#afaa70; stroke:none;" d="M1495 1267L1496 1268L1495 1267z"/>
			<path style="fill:#7f7e6a; stroke:none;" d="M1496 1267L1497 1268L1496 1267z"/>
			<path style="fill:#afaa70; stroke:none;" d="M1491 1268L1492 1269L1491 1268z"/>
			<path style="fill:#7f7e6a; stroke:none;" d="M1492 1268L1493 1269L1492 1268z"/>
			<path style="fill:#ffffff; stroke:none;" d="M1248 1367L1249 1368L1248 1367M1247 1369C1213.09 1416.34 1181.3 1466.89 1155.25 1519C1147.5 1534.49 1129.67 1559.96 1135 1578C1150.25 1572.94 1160.89 1552.67 1169.33 1540C1194.27 1502.59 1213.6 1460.96 1229.58 1419C1234.02 1407.33 1238.66 1395.73 1242.95 1384C1244.56 1379.58 1247.96 1373.66 1247 1369z"/>
			</svg>

		</Wrapper>
	)
}

const Wrapper = styled.div`
  .animated {
    max-width: 300px;
    width: 100%;
    height: 100%;
    stroke-dasharray: ${ (props) => props.pathLength };
    stroke-dashoffset: ${ (props) => props.pathLength };
  }

  .animated.visible {
    animation: draw 6s linear forwards;
  }

  @keyframes draw {
    from {
      stroke-dashoffset: ${ (props) => props.pathLength };
    }
    to {
      stroke-dashoffset: 0;
    }
  }
`