
define([
    'd3',
    '../core/inherit',
    '../core/getType',
    '../core/Options'
  ],
  function(d3, inherit, getType, Options) {

    function Data(rawData, options) {
      this.setRawData('0' in arguments ? rawData : []);
      this.setOptions('1' in arguments ? options : {});
      this.keys = this.getRawData().length === 0 ? [] : Object.keys(this.getRawData()[0]);

      if( 'forEach' in options ) {
        this.getRawData().forEach( options.forEach );
      }

      if( 'map' in options ) {
        this.setRawData( this.getRawData().map(options.map) );
      }
    }

    inherit( Data, Options );

    Data.prototype.setRawData = function setData(rawData) {
      if( getType(rawData) !== 'array' ) {
        throw new Exception('Expected rawData to be an array, ' + (typeof rawData) + ' given');
      }
      this.rawData = rawData;
      return this;
    };

    Data.prototype.getRawData = function getRawData() {
      return this.rawData;
    };

    Data.fromCSV = function fromCSV(csv, options) {
      return new Data( d3.csv.parse(csv), options );
    };

    return Data;
  }

);
