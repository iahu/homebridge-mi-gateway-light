let Service, Characteristic;

class MiGatewayLight {
  constructor(log, config) {
    this.log = log;
    this.config = config;
  }

  getLightbulbOnCharacteristic(next) {
    return next(null, true);
  }

  setLightbulbOnCharacteristic(on, next) {
    console.log(`set Lightbulb ${on}`);
    return next();
  }
}

module.exports = function (homebridge) {
  Service = homebridge.hap.Service;
  Characteristic = homebridge.hap.Characteristic;
  homebridge.registerAccessory("homebridge-mi-gateway-light", "MiGatewayLight", MiGatewayLight);
};