# 适用于 Quantumult X 的节点 IP 地址转地理信息脚本

在 Quantumult X 主界面左上显示节点的地理信息

## 适用范围

地理信息适用于 https://ip-api.com/ API 返回的 JSON 数据，详细 API 说明 https://ip-api.com/docs/api:json

**Quantumult X 配置文件示例:**

        [General]
        geo_location_checker=http://extreme-ip-lookup.com/json/, https://raw.githubusercontent.com/crossutility/Quantumult-X/master/sample-location-with-script.js

## 显示格式

**GeoIP:**

国家/地区

城市 - 数据中心

## Quantumult X 配置

- **中文**

        [General]
        geo_location_checker=http://ip-api.com/json/?lang=zh-CN, https://raw.githubusercontent.com/neverweep/QuantumultX/main/GeoIP/GeoIP_zh.js

- **英文**

        [General]
        geo_location_checker=http://ip-api.com/json/, https://raw.githubusercontent.com/neverweep/QuantumultX/main/GeoIP/GeoIP_en.js