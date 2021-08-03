/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobuf.min.js");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.MmBp = (function() {

    /**
     * Namespace MmBp.
     * @exports MmBp
     * @namespace
     */
    var MmBp = {};

    /**
     * EmCmdId enum.
     * @name MmBp.EmCmdId
     * @enum {number}
     * @property {number} ECI_none=0 ECI_none value
     * @property {number} ECI_req_auth=10001 ECI_req_auth value
     * @property {number} ECI_req_sendData=10002 ECI_req_sendData value
     * @property {number} ECI_req_init=10003 ECI_req_init value
     * @property {number} ECI_resp_auth=20001 ECI_resp_auth value
     * @property {number} ECI_resp_sendData=20002 ECI_resp_sendData value
     * @property {number} ECI_resp_init=20003 ECI_resp_init value
     * @property {number} ECI_push_recvData=30001 ECI_push_recvData value
     * @property {number} ECI_push_switchView=30002 ECI_push_switchView value
     * @property {number} ECI_push_switchBackgroud=30003 ECI_push_switchBackgroud value
     * @property {number} ECI_err_decode=29999 ECI_err_decode value
     */
    MmBp.EmCmdId = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "ECI_none"] = 0;
        values[valuesById[10001] = "ECI_req_auth"] = 10001;
        values[valuesById[10002] = "ECI_req_sendData"] = 10002;
        values[valuesById[10003] = "ECI_req_init"] = 10003;
        values[valuesById[20001] = "ECI_resp_auth"] = 20001;
        values[valuesById[20002] = "ECI_resp_sendData"] = 20002;
        values[valuesById[20003] = "ECI_resp_init"] = 20003;
        values[valuesById[30001] = "ECI_push_recvData"] = 30001;
        values[valuesById[30002] = "ECI_push_switchView"] = 30002;
        values[valuesById[30003] = "ECI_push_switchBackgroud"] = 30003;
        values[valuesById[29999] = "ECI_err_decode"] = 29999;
        return values;
    })();

    /**
     * EmErrorCode enum.
     * @name MmBp.EmErrorCode
     * @enum {number}
     * @property {number} EEC_system=-1 EEC_system value
     * @property {number} EEC_needAuth=-2 EEC_needAuth value
     * @property {number} EEC_sessionTimeout=-3 EEC_sessionTimeout value
     * @property {number} EEC_decode=-4 EEC_decode value
     * @property {number} EEC_deviceIsBlock=-5 EEC_deviceIsBlock value
     * @property {number} EEC_serviceUnAvalibleInBackground=-6 EEC_serviceUnAvalibleInBackground value
     * @property {number} EEC_deviceProtoVersionNeedUpdate=-7 EEC_deviceProtoVersionNeedUpdate value
     * @property {number} EEC_phoneProtoVersionNeedUpdate=-8 EEC_phoneProtoVersionNeedUpdate value
     * @property {number} EEC_maxReqInQueue=-9 EEC_maxReqInQueue value
     * @property {number} EEC_userExitWxAccount=-10 EEC_userExitWxAccount value
     */
    MmBp.EmErrorCode = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[-1] = "EEC_system"] = -1;
        values[valuesById[-2] = "EEC_needAuth"] = -2;
        values[valuesById[-3] = "EEC_sessionTimeout"] = -3;
        values[valuesById[-4] = "EEC_decode"] = -4;
        values[valuesById[-5] = "EEC_deviceIsBlock"] = -5;
        values[valuesById[-6] = "EEC_serviceUnAvalibleInBackground"] = -6;
        values[valuesById[-7] = "EEC_deviceProtoVersionNeedUpdate"] = -7;
        values[valuesById[-8] = "EEC_phoneProtoVersionNeedUpdate"] = -8;
        values[valuesById[-9] = "EEC_maxReqInQueue"] = -9;
        values[valuesById[-10] = "EEC_userExitWxAccount"] = -10;
        return values;
    })();

    MmBp.BaseRequest = (function() {

        /**
         * Properties of a BaseRequest.
         * @memberof MmBp
         * @interface IBaseRequest
         */

        /**
         * Constructs a new BaseRequest.
         * @memberof MmBp
         * @classdesc Represents a BaseRequest.
         * @implements IBaseRequest
         * @constructor
         * @param {MmBp.IBaseRequest=} [properties] Properties to set
         */
        function BaseRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new BaseRequest instance using the specified properties.
         * @function create
         * @memberof MmBp.BaseRequest
         * @static
         * @param {MmBp.IBaseRequest=} [properties] Properties to set
         * @returns {MmBp.BaseRequest} BaseRequest instance
         */
        BaseRequest.create = function create(properties) {
            return new BaseRequest(properties);
        };

        /**
         * Encodes the specified BaseRequest message. Does not implicitly {@link MmBp.BaseRequest.verify|verify} messages.
         * @function encode
         * @memberof MmBp.BaseRequest
         * @static
         * @param {MmBp.IBaseRequest} message BaseRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BaseRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified BaseRequest message, length delimited. Does not implicitly {@link MmBp.BaseRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof MmBp.BaseRequest
         * @static
         * @param {MmBp.IBaseRequest} message BaseRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BaseRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BaseRequest message from the specified reader or buffer.
         * @function decode
         * @memberof MmBp.BaseRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {MmBp.BaseRequest} BaseRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BaseRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.MmBp.BaseRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BaseRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof MmBp.BaseRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {MmBp.BaseRequest} BaseRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BaseRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BaseRequest message.
         * @function verify
         * @memberof MmBp.BaseRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BaseRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a BaseRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof MmBp.BaseRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {MmBp.BaseRequest} BaseRequest
         */
        BaseRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.MmBp.BaseRequest)
                return object;
            return new $root.MmBp.BaseRequest();
        };

        /**
         * Creates a plain object from a BaseRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof MmBp.BaseRequest
         * @static
         * @param {MmBp.BaseRequest} message BaseRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BaseRequest.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this BaseRequest to JSON.
         * @function toJSON
         * @memberof MmBp.BaseRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BaseRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BaseRequest;
    })();

    MmBp.BaseResponse = (function() {

        /**
         * Properties of a BaseResponse.
         * @memberof MmBp
         * @interface IBaseResponse
         * @property {number} ErrCode BaseResponse ErrCode
         * @property {string|null} [ErrMsg] BaseResponse ErrMsg
         */

        /**
         * Constructs a new BaseResponse.
         * @memberof MmBp
         * @classdesc Represents a BaseResponse.
         * @implements IBaseResponse
         * @constructor
         * @param {MmBp.IBaseResponse=} [properties] Properties to set
         */
        function BaseResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BaseResponse ErrCode.
         * @member {number} ErrCode
         * @memberof MmBp.BaseResponse
         * @instance
         */
        BaseResponse.prototype.ErrCode = 0;

        /**
         * BaseResponse ErrMsg.
         * @member {string|null|undefined} ErrMsg
         * @memberof MmBp.BaseResponse
         * @instance
         */
        BaseResponse.prototype.ErrMsg = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * BaseResponse _ErrMsg.
         * @member {"ErrMsg"|undefined} _ErrMsg
         * @memberof MmBp.BaseResponse
         * @instance
         */
        Object.defineProperty(BaseResponse.prototype, "_ErrMsg", {
            get: $util.oneOfGetter($oneOfFields = ["ErrMsg"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new BaseResponse instance using the specified properties.
         * @function create
         * @memberof MmBp.BaseResponse
         * @static
         * @param {MmBp.IBaseResponse=} [properties] Properties to set
         * @returns {MmBp.BaseResponse} BaseResponse instance
         */
        BaseResponse.create = function create(properties) {
            return new BaseResponse(properties);
        };

        /**
         * Encodes the specified BaseResponse message. Does not implicitly {@link MmBp.BaseResponse.verify|verify} messages.
         * @function encode
         * @memberof MmBp.BaseResponse
         * @static
         * @param {MmBp.IBaseResponse} message BaseResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BaseResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.ErrCode);
            if (message.ErrMsg != null && Object.hasOwnProperty.call(message, "ErrMsg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.ErrMsg);
            return writer;
        };

        /**
         * Encodes the specified BaseResponse message, length delimited. Does not implicitly {@link MmBp.BaseResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof MmBp.BaseResponse
         * @static
         * @param {MmBp.IBaseResponse} message BaseResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BaseResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BaseResponse message from the specified reader or buffer.
         * @function decode
         * @memberof MmBp.BaseResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {MmBp.BaseResponse} BaseResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BaseResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.MmBp.BaseResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ErrCode = reader.int32();
                    break;
                case 2:
                    message.ErrMsg = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("ErrCode"))
                throw $util.ProtocolError("missing required 'ErrCode'", { instance: message });
            return message;
        };

        /**
         * Decodes a BaseResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof MmBp.BaseResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {MmBp.BaseResponse} BaseResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BaseResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BaseResponse message.
         * @function verify
         * @memberof MmBp.BaseResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BaseResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (!$util.isInteger(message.ErrCode))
                return "ErrCode: integer expected";
            if (message.ErrMsg != null && message.hasOwnProperty("ErrMsg")) {
                properties._ErrMsg = 1;
                if (!$util.isString(message.ErrMsg))
                    return "ErrMsg: string expected";
            }
            return null;
        };

        /**
         * Creates a BaseResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof MmBp.BaseResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {MmBp.BaseResponse} BaseResponse
         */
        BaseResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.MmBp.BaseResponse)
                return object;
            var message = new $root.MmBp.BaseResponse();
            if (object.ErrCode != null)
                message.ErrCode = object.ErrCode | 0;
            if (object.ErrMsg != null)
                message.ErrMsg = String(object.ErrMsg);
            return message;
        };

        /**
         * Creates a plain object from a BaseResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof MmBp.BaseResponse
         * @static
         * @param {MmBp.BaseResponse} message BaseResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BaseResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.ErrCode = 0;
            if (message.ErrCode != null && message.hasOwnProperty("ErrCode"))
                object.ErrCode = message.ErrCode;
            if (message.ErrMsg != null && message.hasOwnProperty("ErrMsg")) {
                object.ErrMsg = message.ErrMsg;
                if (options.oneofs)
                    object._ErrMsg = "ErrMsg";
            }
            return object;
        };

        /**
         * Converts this BaseResponse to JSON.
         * @function toJSON
         * @memberof MmBp.BaseResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BaseResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BaseResponse;
    })();

    MmBp.BasePush = (function() {

        /**
         * Properties of a BasePush.
         * @memberof MmBp
         * @interface IBasePush
         */

        /**
         * Constructs a new BasePush.
         * @memberof MmBp
         * @classdesc Represents a BasePush.
         * @implements IBasePush
         * @constructor
         * @param {MmBp.IBasePush=} [properties] Properties to set
         */
        function BasePush(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new BasePush instance using the specified properties.
         * @function create
         * @memberof MmBp.BasePush
         * @static
         * @param {MmBp.IBasePush=} [properties] Properties to set
         * @returns {MmBp.BasePush} BasePush instance
         */
        BasePush.create = function create(properties) {
            return new BasePush(properties);
        };

        /**
         * Encodes the specified BasePush message. Does not implicitly {@link MmBp.BasePush.verify|verify} messages.
         * @function encode
         * @memberof MmBp.BasePush
         * @static
         * @param {MmBp.IBasePush} message BasePush message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BasePush.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified BasePush message, length delimited. Does not implicitly {@link MmBp.BasePush.verify|verify} messages.
         * @function encodeDelimited
         * @memberof MmBp.BasePush
         * @static
         * @param {MmBp.IBasePush} message BasePush message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BasePush.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BasePush message from the specified reader or buffer.
         * @function decode
         * @memberof MmBp.BasePush
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {MmBp.BasePush} BasePush
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BasePush.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.MmBp.BasePush();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BasePush message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof MmBp.BasePush
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {MmBp.BasePush} BasePush
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BasePush.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BasePush message.
         * @function verify
         * @memberof MmBp.BasePush
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BasePush.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a BasePush message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof MmBp.BasePush
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {MmBp.BasePush} BasePush
         */
        BasePush.fromObject = function fromObject(object) {
            if (object instanceof $root.MmBp.BasePush)
                return object;
            return new $root.MmBp.BasePush();
        };

        /**
         * Creates a plain object from a BasePush message. Also converts values to other types if specified.
         * @function toObject
         * @memberof MmBp.BasePush
         * @static
         * @param {MmBp.BasePush} message BasePush
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BasePush.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this BasePush to JSON.
         * @function toJSON
         * @memberof MmBp.BasePush
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BasePush.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BasePush;
    })();

    /**
     * EmAuthMethod enum.
     * @name MmBp.EmAuthMethod
     * @enum {number}
     * @property {number} EAM_md5=1 EAM_md5 value
     * @property {number} EAM_macNoEncrypt=2 EAM_macNoEncrypt value
     */
    MmBp.EmAuthMethod = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[1] = "EAM_md5"] = 1;
        values[valuesById[2] = "EAM_macNoEncrypt"] = 2;
        return values;
    })();

    MmBp.AuthRequest = (function() {

        /**
         * Properties of an AuthRequest.
         * @memberof MmBp
         * @interface IAuthRequest
         * @property {MmBp.IBaseRequest} BaseRequest AuthRequest BaseRequest
         * @property {Uint8Array|null} [Md5DeviceTypeAndDeviceId] AuthRequest Md5DeviceTypeAndDeviceId
         * @property {number} ProtoVersion AuthRequest ProtoVersion
         * @property {number} AuthProto AuthRequest AuthProto
         * @property {MmBp.EmAuthMethod} AuthMethod AuthRequest AuthMethod
         * @property {Uint8Array|null} [AesSign] AuthRequest AesSign
         * @property {Uint8Array|null} [MacAddress] AuthRequest MacAddress
         * @property {string|null} [TimeZone] AuthRequest TimeZone
         * @property {string|null} [Language] AuthRequest Language
         * @property {string|null} [DeviceName] AuthRequest DeviceName
         */

        /**
         * Constructs a new AuthRequest.
         * @memberof MmBp
         * @classdesc Represents an AuthRequest.
         * @implements IAuthRequest
         * @constructor
         * @param {MmBp.IAuthRequest=} [properties] Properties to set
         */
        function AuthRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AuthRequest BaseRequest.
         * @member {MmBp.IBaseRequest} BaseRequest
         * @memberof MmBp.AuthRequest
         * @instance
         */
        AuthRequest.prototype.BaseRequest = null;

        /**
         * AuthRequest Md5DeviceTypeAndDeviceId.
         * @member {Uint8Array|null|undefined} Md5DeviceTypeAndDeviceId
         * @memberof MmBp.AuthRequest
         * @instance
         */
        AuthRequest.prototype.Md5DeviceTypeAndDeviceId = null;

        /**
         * AuthRequest ProtoVersion.
         * @member {number} ProtoVersion
         * @memberof MmBp.AuthRequest
         * @instance
         */
        AuthRequest.prototype.ProtoVersion = 0;

        /**
         * AuthRequest AuthProto.
         * @member {number} AuthProto
         * @memberof MmBp.AuthRequest
         * @instance
         */
        AuthRequest.prototype.AuthProto = 0;

        /**
         * AuthRequest AuthMethod.
         * @member {MmBp.EmAuthMethod} AuthMethod
         * @memberof MmBp.AuthRequest
         * @instance
         */
        AuthRequest.prototype.AuthMethod = 1;

        /**
         * AuthRequest AesSign.
         * @member {Uint8Array|null|undefined} AesSign
         * @memberof MmBp.AuthRequest
         * @instance
         */
        AuthRequest.prototype.AesSign = null;

        /**
         * AuthRequest MacAddress.
         * @member {Uint8Array|null|undefined} MacAddress
         * @memberof MmBp.AuthRequest
         * @instance
         */
        AuthRequest.prototype.MacAddress = null;

        /**
         * AuthRequest TimeZone.
         * @member {string|null|undefined} TimeZone
         * @memberof MmBp.AuthRequest
         * @instance
         */
        AuthRequest.prototype.TimeZone = null;

        /**
         * AuthRequest Language.
         * @member {string|null|undefined} Language
         * @memberof MmBp.AuthRequest
         * @instance
         */
        AuthRequest.prototype.Language = null;

        /**
         * AuthRequest DeviceName.
         * @member {string|null|undefined} DeviceName
         * @memberof MmBp.AuthRequest
         * @instance
         */
        AuthRequest.prototype.DeviceName = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * AuthRequest _Md5DeviceTypeAndDeviceId.
         * @member {"Md5DeviceTypeAndDeviceId"|undefined} _Md5DeviceTypeAndDeviceId
         * @memberof MmBp.AuthRequest
         * @instance
         */
        Object.defineProperty(AuthRequest.prototype, "_Md5DeviceTypeAndDeviceId", {
            get: $util.oneOfGetter($oneOfFields = ["Md5DeviceTypeAndDeviceId"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * AuthRequest _AesSign.
         * @member {"AesSign"|undefined} _AesSign
         * @memberof MmBp.AuthRequest
         * @instance
         */
        Object.defineProperty(AuthRequest.prototype, "_AesSign", {
            get: $util.oneOfGetter($oneOfFields = ["AesSign"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * AuthRequest _MacAddress.
         * @member {"MacAddress"|undefined} _MacAddress
         * @memberof MmBp.AuthRequest
         * @instance
         */
        Object.defineProperty(AuthRequest.prototype, "_MacAddress", {
            get: $util.oneOfGetter($oneOfFields = ["MacAddress"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * AuthRequest _TimeZone.
         * @member {"TimeZone"|undefined} _TimeZone
         * @memberof MmBp.AuthRequest
         * @instance
         */
        Object.defineProperty(AuthRequest.prototype, "_TimeZone", {
            get: $util.oneOfGetter($oneOfFields = ["TimeZone"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * AuthRequest _Language.
         * @member {"Language"|undefined} _Language
         * @memberof MmBp.AuthRequest
         * @instance
         */
        Object.defineProperty(AuthRequest.prototype, "_Language", {
            get: $util.oneOfGetter($oneOfFields = ["Language"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * AuthRequest _DeviceName.
         * @member {"DeviceName"|undefined} _DeviceName
         * @memberof MmBp.AuthRequest
         * @instance
         */
        Object.defineProperty(AuthRequest.prototype, "_DeviceName", {
            get: $util.oneOfGetter($oneOfFields = ["DeviceName"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new AuthRequest instance using the specified properties.
         * @function create
         * @memberof MmBp.AuthRequest
         * @static
         * @param {MmBp.IAuthRequest=} [properties] Properties to set
         * @returns {MmBp.AuthRequest} AuthRequest instance
         */
        AuthRequest.create = function create(properties) {
            return new AuthRequest(properties);
        };

        /**
         * Encodes the specified AuthRequest message. Does not implicitly {@link MmBp.AuthRequest.verify|verify} messages.
         * @function encode
         * @memberof MmBp.AuthRequest
         * @static
         * @param {MmBp.IAuthRequest} message AuthRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AuthRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            $root.MmBp.BaseRequest.encode(message.BaseRequest, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.Md5DeviceTypeAndDeviceId != null && Object.hasOwnProperty.call(message, "Md5DeviceTypeAndDeviceId"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.Md5DeviceTypeAndDeviceId);
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.ProtoVersion);
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.AuthProto);
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.AuthMethod);
            if (message.AesSign != null && Object.hasOwnProperty.call(message, "AesSign"))
                writer.uint32(/* id 6, wireType 2 =*/50).bytes(message.AesSign);
            if (message.MacAddress != null && Object.hasOwnProperty.call(message, "MacAddress"))
                writer.uint32(/* id 7, wireType 2 =*/58).bytes(message.MacAddress);
            if (message.TimeZone != null && Object.hasOwnProperty.call(message, "TimeZone"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.TimeZone);
            if (message.Language != null && Object.hasOwnProperty.call(message, "Language"))
                writer.uint32(/* id 11, wireType 2 =*/90).string(message.Language);
            if (message.DeviceName != null && Object.hasOwnProperty.call(message, "DeviceName"))
                writer.uint32(/* id 12, wireType 2 =*/98).string(message.DeviceName);
            return writer;
        };

        /**
         * Encodes the specified AuthRequest message, length delimited. Does not implicitly {@link MmBp.AuthRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof MmBp.AuthRequest
         * @static
         * @param {MmBp.IAuthRequest} message AuthRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AuthRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AuthRequest message from the specified reader or buffer.
         * @function decode
         * @memberof MmBp.AuthRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {MmBp.AuthRequest} AuthRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AuthRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.MmBp.AuthRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.BaseRequest = $root.MmBp.BaseRequest.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.Md5DeviceTypeAndDeviceId = reader.bytes();
                    break;
                case 3:
                    message.ProtoVersion = reader.int32();
                    break;
                case 4:
                    message.AuthProto = reader.int32();
                    break;
                case 5:
                    message.AuthMethod = reader.int32();
                    break;
                case 6:
                    message.AesSign = reader.bytes();
                    break;
                case 7:
                    message.MacAddress = reader.bytes();
                    break;
                case 10:
                    message.TimeZone = reader.string();
                    break;
                case 11:
                    message.Language = reader.string();
                    break;
                case 12:
                    message.DeviceName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("BaseRequest"))
                throw $util.ProtocolError("missing required 'BaseRequest'", { instance: message });
            if (!message.hasOwnProperty("ProtoVersion"))
                throw $util.ProtocolError("missing required 'ProtoVersion'", { instance: message });
            if (!message.hasOwnProperty("AuthProto"))
                throw $util.ProtocolError("missing required 'AuthProto'", { instance: message });
            if (!message.hasOwnProperty("AuthMethod"))
                throw $util.ProtocolError("missing required 'AuthMethod'", { instance: message });
            return message;
        };

        /**
         * Decodes an AuthRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof MmBp.AuthRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {MmBp.AuthRequest} AuthRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AuthRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AuthRequest message.
         * @function verify
         * @memberof MmBp.AuthRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AuthRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            {
                var error = $root.MmBp.BaseRequest.verify(message.BaseRequest);
                if (error)
                    return "BaseRequest." + error;
            }
            if (message.Md5DeviceTypeAndDeviceId != null && message.hasOwnProperty("Md5DeviceTypeAndDeviceId")) {
                properties._Md5DeviceTypeAndDeviceId = 1;
                if (!(message.Md5DeviceTypeAndDeviceId && typeof message.Md5DeviceTypeAndDeviceId.length === "number" || $util.isString(message.Md5DeviceTypeAndDeviceId)))
                    return "Md5DeviceTypeAndDeviceId: buffer expected";
            }
            if (!$util.isInteger(message.ProtoVersion))
                return "ProtoVersion: integer expected";
            if (!$util.isInteger(message.AuthProto))
                return "AuthProto: integer expected";
            switch (message.AuthMethod) {
            default:
                return "AuthMethod: enum value expected";
            case 1:
            case 2:
                break;
            }
            if (message.AesSign != null && message.hasOwnProperty("AesSign")) {
                properties._AesSign = 1;
                if (!(message.AesSign && typeof message.AesSign.length === "number" || $util.isString(message.AesSign)))
                    return "AesSign: buffer expected";
            }
            if (message.MacAddress != null && message.hasOwnProperty("MacAddress")) {
                properties._MacAddress = 1;
                if (!(message.MacAddress && typeof message.MacAddress.length === "number" || $util.isString(message.MacAddress)))
                    return "MacAddress: buffer expected";
            }
            if (message.TimeZone != null && message.hasOwnProperty("TimeZone")) {
                properties._TimeZone = 1;
                if (!$util.isString(message.TimeZone))
                    return "TimeZone: string expected";
            }
            if (message.Language != null && message.hasOwnProperty("Language")) {
                properties._Language = 1;
                if (!$util.isString(message.Language))
                    return "Language: string expected";
            }
            if (message.DeviceName != null && message.hasOwnProperty("DeviceName")) {
                properties._DeviceName = 1;
                if (!$util.isString(message.DeviceName))
                    return "DeviceName: string expected";
            }
            return null;
        };

        /**
         * Creates an AuthRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof MmBp.AuthRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {MmBp.AuthRequest} AuthRequest
         */
        AuthRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.MmBp.AuthRequest)
                return object;
            var message = new $root.MmBp.AuthRequest();
            if (object.BaseRequest != null) {
                if (typeof object.BaseRequest !== "object")
                    throw TypeError(".MmBp.AuthRequest.BaseRequest: object expected");
                message.BaseRequest = $root.MmBp.BaseRequest.fromObject(object.BaseRequest);
            }
            if (object.Md5DeviceTypeAndDeviceId != null)
                if (typeof object.Md5DeviceTypeAndDeviceId === "string")
                    $util.base64.decode(object.Md5DeviceTypeAndDeviceId, message.Md5DeviceTypeAndDeviceId = $util.newBuffer($util.base64.length(object.Md5DeviceTypeAndDeviceId)), 0);
                else if (object.Md5DeviceTypeAndDeviceId.length)
                    message.Md5DeviceTypeAndDeviceId = object.Md5DeviceTypeAndDeviceId;
            if (object.ProtoVersion != null)
                message.ProtoVersion = object.ProtoVersion | 0;
            if (object.AuthProto != null)
                message.AuthProto = object.AuthProto | 0;
            switch (object.AuthMethod) {
            case "EAM_md5":
            case 1:
                message.AuthMethod = 1;
                break;
            case "EAM_macNoEncrypt":
            case 2:
                message.AuthMethod = 2;
                break;
            }
            if (object.AesSign != null)
                if (typeof object.AesSign === "string")
                    $util.base64.decode(object.AesSign, message.AesSign = $util.newBuffer($util.base64.length(object.AesSign)), 0);
                else if (object.AesSign.length)
                    message.AesSign = object.AesSign;
            if (object.MacAddress != null)
                if (typeof object.MacAddress === "string")
                    $util.base64.decode(object.MacAddress, message.MacAddress = $util.newBuffer($util.base64.length(object.MacAddress)), 0);
                else if (object.MacAddress.length)
                    message.MacAddress = object.MacAddress;
            if (object.TimeZone != null)
                message.TimeZone = String(object.TimeZone);
            if (object.Language != null)
                message.Language = String(object.Language);
            if (object.DeviceName != null)
                message.DeviceName = String(object.DeviceName);
            return message;
        };

        /**
         * Creates a plain object from an AuthRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof MmBp.AuthRequest
         * @static
         * @param {MmBp.AuthRequest} message AuthRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AuthRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.BaseRequest = null;
                object.ProtoVersion = 0;
                object.AuthProto = 0;
                object.AuthMethod = options.enums === String ? "EAM_md5" : 1;
            }
            if (message.BaseRequest != null && message.hasOwnProperty("BaseRequest"))
                object.BaseRequest = $root.MmBp.BaseRequest.toObject(message.BaseRequest, options);
            if (message.Md5DeviceTypeAndDeviceId != null && message.hasOwnProperty("Md5DeviceTypeAndDeviceId")) {
                object.Md5DeviceTypeAndDeviceId = options.bytes === String ? $util.base64.encode(message.Md5DeviceTypeAndDeviceId, 0, message.Md5DeviceTypeAndDeviceId.length) : options.bytes === Array ? Array.prototype.slice.call(message.Md5DeviceTypeAndDeviceId) : message.Md5DeviceTypeAndDeviceId;
                if (options.oneofs)
                    object._Md5DeviceTypeAndDeviceId = "Md5DeviceTypeAndDeviceId";
            }
            if (message.ProtoVersion != null && message.hasOwnProperty("ProtoVersion"))
                object.ProtoVersion = message.ProtoVersion;
            if (message.AuthProto != null && message.hasOwnProperty("AuthProto"))
                object.AuthProto = message.AuthProto;
            if (message.AuthMethod != null && message.hasOwnProperty("AuthMethod"))
                object.AuthMethod = options.enums === String ? $root.MmBp.EmAuthMethod[message.AuthMethod] : message.AuthMethod;
            if (message.AesSign != null && message.hasOwnProperty("AesSign")) {
                object.AesSign = options.bytes === String ? $util.base64.encode(message.AesSign, 0, message.AesSign.length) : options.bytes === Array ? Array.prototype.slice.call(message.AesSign) : message.AesSign;
                if (options.oneofs)
                    object._AesSign = "AesSign";
            }
            if (message.MacAddress != null && message.hasOwnProperty("MacAddress")) {
                object.MacAddress = options.bytes === String ? $util.base64.encode(message.MacAddress, 0, message.MacAddress.length) : options.bytes === Array ? Array.prototype.slice.call(message.MacAddress) : message.MacAddress;
                if (options.oneofs)
                    object._MacAddress = "MacAddress";
            }
            if (message.TimeZone != null && message.hasOwnProperty("TimeZone")) {
                object.TimeZone = message.TimeZone;
                if (options.oneofs)
                    object._TimeZone = "TimeZone";
            }
            if (message.Language != null && message.hasOwnProperty("Language")) {
                object.Language = message.Language;
                if (options.oneofs)
                    object._Language = "Language";
            }
            if (message.DeviceName != null && message.hasOwnProperty("DeviceName")) {
                object.DeviceName = message.DeviceName;
                if (options.oneofs)
                    object._DeviceName = "DeviceName";
            }
            return object;
        };

        /**
         * Converts this AuthRequest to JSON.
         * @function toJSON
         * @memberof MmBp.AuthRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AuthRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AuthRequest;
    })();

    MmBp.AuthResponse = (function() {

        /**
         * Properties of an AuthResponse.
         * @memberof MmBp
         * @interface IAuthResponse
         * @property {MmBp.IBaseResponse} BaseResponse AuthResponse BaseResponse
         * @property {Uint8Array} AesSessionKey AuthResponse AesSessionKey
         */

        /**
         * Constructs a new AuthResponse.
         * @memberof MmBp
         * @classdesc Represents an AuthResponse.
         * @implements IAuthResponse
         * @constructor
         * @param {MmBp.IAuthResponse=} [properties] Properties to set
         */
        function AuthResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AuthResponse BaseResponse.
         * @member {MmBp.IBaseResponse} BaseResponse
         * @memberof MmBp.AuthResponse
         * @instance
         */
        AuthResponse.prototype.BaseResponse = null;

        /**
         * AuthResponse AesSessionKey.
         * @member {Uint8Array} AesSessionKey
         * @memberof MmBp.AuthResponse
         * @instance
         */
        AuthResponse.prototype.AesSessionKey = $util.newBuffer([]);

        /**
         * Creates a new AuthResponse instance using the specified properties.
         * @function create
         * @memberof MmBp.AuthResponse
         * @static
         * @param {MmBp.IAuthResponse=} [properties] Properties to set
         * @returns {MmBp.AuthResponse} AuthResponse instance
         */
        AuthResponse.create = function create(properties) {
            return new AuthResponse(properties);
        };

        /**
         * Encodes the specified AuthResponse message. Does not implicitly {@link MmBp.AuthResponse.verify|verify} messages.
         * @function encode
         * @memberof MmBp.AuthResponse
         * @static
         * @param {MmBp.IAuthResponse} message AuthResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AuthResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            $root.MmBp.BaseResponse.encode(message.BaseResponse, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.AesSessionKey);
            return writer;
        };

        /**
         * Encodes the specified AuthResponse message, length delimited. Does not implicitly {@link MmBp.AuthResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof MmBp.AuthResponse
         * @static
         * @param {MmBp.IAuthResponse} message AuthResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AuthResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AuthResponse message from the specified reader or buffer.
         * @function decode
         * @memberof MmBp.AuthResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {MmBp.AuthResponse} AuthResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AuthResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.MmBp.AuthResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.BaseResponse = $root.MmBp.BaseResponse.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.AesSessionKey = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("BaseResponse"))
                throw $util.ProtocolError("missing required 'BaseResponse'", { instance: message });
            if (!message.hasOwnProperty("AesSessionKey"))
                throw $util.ProtocolError("missing required 'AesSessionKey'", { instance: message });
            return message;
        };

        /**
         * Decodes an AuthResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof MmBp.AuthResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {MmBp.AuthResponse} AuthResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AuthResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AuthResponse message.
         * @function verify
         * @memberof MmBp.AuthResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AuthResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            {
                var error = $root.MmBp.BaseResponse.verify(message.BaseResponse);
                if (error)
                    return "BaseResponse." + error;
            }
            if (!(message.AesSessionKey && typeof message.AesSessionKey.length === "number" || $util.isString(message.AesSessionKey)))
                return "AesSessionKey: buffer expected";
            return null;
        };

        /**
         * Creates an AuthResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof MmBp.AuthResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {MmBp.AuthResponse} AuthResponse
         */
        AuthResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.MmBp.AuthResponse)
                return object;
            var message = new $root.MmBp.AuthResponse();
            if (object.BaseResponse != null) {
                if (typeof object.BaseResponse !== "object")
                    throw TypeError(".MmBp.AuthResponse.BaseResponse: object expected");
                message.BaseResponse = $root.MmBp.BaseResponse.fromObject(object.BaseResponse);
            }
            if (object.AesSessionKey != null)
                if (typeof object.AesSessionKey === "string")
                    $util.base64.decode(object.AesSessionKey, message.AesSessionKey = $util.newBuffer($util.base64.length(object.AesSessionKey)), 0);
                else if (object.AesSessionKey.length)
                    message.AesSessionKey = object.AesSessionKey;
            return message;
        };

        /**
         * Creates a plain object from an AuthResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof MmBp.AuthResponse
         * @static
         * @param {MmBp.AuthResponse} message AuthResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AuthResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.BaseResponse = null;
                if (options.bytes === String)
                    object.AesSessionKey = "";
                else {
                    object.AesSessionKey = [];
                    if (options.bytes !== Array)
                        object.AesSessionKey = $util.newBuffer(object.AesSessionKey);
                }
            }
            if (message.BaseResponse != null && message.hasOwnProperty("BaseResponse"))
                object.BaseResponse = $root.MmBp.BaseResponse.toObject(message.BaseResponse, options);
            if (message.AesSessionKey != null && message.hasOwnProperty("AesSessionKey"))
                object.AesSessionKey = options.bytes === String ? $util.base64.encode(message.AesSessionKey, 0, message.AesSessionKey.length) : options.bytes === Array ? Array.prototype.slice.call(message.AesSessionKey) : message.AesSessionKey;
            return object;
        };

        /**
         * Converts this AuthResponse to JSON.
         * @function toJSON
         * @memberof MmBp.AuthResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AuthResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AuthResponse;
    })();

    /**
     * EmInitRespFieldFilter enum.
     * @name MmBp.EmInitRespFieldFilter
     * @enum {number}
     * @property {number} EIRFF_userNickName=1 EIRFF_userNickName value
     * @property {number} EIRFF_platformType=2 EIRFF_platformType value
     * @property {number} EIRFF_model=4 EIRFF_model value
     * @property {number} EIRFF_os=8 EIRFF_os value
     * @property {number} EIRFF_time=16 EIRFF_time value
     * @property {number} EIRFF_timeZone=32 EIRFF_timeZone value
     * @property {number} EIRFF_timeString=64 EIRFF_timeString value
     */
    MmBp.EmInitRespFieldFilter = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[1] = "EIRFF_userNickName"] = 1;
        values[valuesById[2] = "EIRFF_platformType"] = 2;
        values[valuesById[4] = "EIRFF_model"] = 4;
        values[valuesById[8] = "EIRFF_os"] = 8;
        values[valuesById[16] = "EIRFF_time"] = 16;
        values[valuesById[32] = "EIRFF_timeZone"] = 32;
        values[valuesById[64] = "EIRFF_timeString"] = 64;
        return values;
    })();

    /**
     * EmInitScence enum.
     * @name MmBp.EmInitScence
     * @enum {number}
     * @property {number} EIS_deviceChat=1 EIS_deviceChat value
     * @property {number} EIS_autoSync=2 EIS_autoSync value
     */
    MmBp.EmInitScence = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[1] = "EIS_deviceChat"] = 1;
        values[valuesById[2] = "EIS_autoSync"] = 2;
        return values;
    })();

    MmBp.InitRequest = (function() {

        /**
         * Properties of an InitRequest.
         * @memberof MmBp
         * @interface IInitRequest
         * @property {MmBp.IBaseRequest} BaseRequest InitRequest BaseRequest
         * @property {Uint8Array|null} [RespFieldFilter] InitRequest RespFieldFilter
         * @property {Uint8Array|null} [Challenge] InitRequest Challenge
         */

        /**
         * Constructs a new InitRequest.
         * @memberof MmBp
         * @classdesc Represents an InitRequest.
         * @implements IInitRequest
         * @constructor
         * @param {MmBp.IInitRequest=} [properties] Properties to set
         */
        function InitRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * InitRequest BaseRequest.
         * @member {MmBp.IBaseRequest} BaseRequest
         * @memberof MmBp.InitRequest
         * @instance
         */
        InitRequest.prototype.BaseRequest = null;

        /**
         * InitRequest RespFieldFilter.
         * @member {Uint8Array|null|undefined} RespFieldFilter
         * @memberof MmBp.InitRequest
         * @instance
         */
        InitRequest.prototype.RespFieldFilter = null;

        /**
         * InitRequest Challenge.
         * @member {Uint8Array|null|undefined} Challenge
         * @memberof MmBp.InitRequest
         * @instance
         */
        InitRequest.prototype.Challenge = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * InitRequest _RespFieldFilter.
         * @member {"RespFieldFilter"|undefined} _RespFieldFilter
         * @memberof MmBp.InitRequest
         * @instance
         */
        Object.defineProperty(InitRequest.prototype, "_RespFieldFilter", {
            get: $util.oneOfGetter($oneOfFields = ["RespFieldFilter"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * InitRequest _Challenge.
         * @member {"Challenge"|undefined} _Challenge
         * @memberof MmBp.InitRequest
         * @instance
         */
        Object.defineProperty(InitRequest.prototype, "_Challenge", {
            get: $util.oneOfGetter($oneOfFields = ["Challenge"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new InitRequest instance using the specified properties.
         * @function create
         * @memberof MmBp.InitRequest
         * @static
         * @param {MmBp.IInitRequest=} [properties] Properties to set
         * @returns {MmBp.InitRequest} InitRequest instance
         */
        InitRequest.create = function create(properties) {
            return new InitRequest(properties);
        };

        /**
         * Encodes the specified InitRequest message. Does not implicitly {@link MmBp.InitRequest.verify|verify} messages.
         * @function encode
         * @memberof MmBp.InitRequest
         * @static
         * @param {MmBp.IInitRequest} message InitRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        InitRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            $root.MmBp.BaseRequest.encode(message.BaseRequest, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.RespFieldFilter != null && Object.hasOwnProperty.call(message, "RespFieldFilter"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.RespFieldFilter);
            if (message.Challenge != null && Object.hasOwnProperty.call(message, "Challenge"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.Challenge);
            return writer;
        };

        /**
         * Encodes the specified InitRequest message, length delimited. Does not implicitly {@link MmBp.InitRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof MmBp.InitRequest
         * @static
         * @param {MmBp.IInitRequest} message InitRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        InitRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an InitRequest message from the specified reader or buffer.
         * @function decode
         * @memberof MmBp.InitRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {MmBp.InitRequest} InitRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        InitRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.MmBp.InitRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.BaseRequest = $root.MmBp.BaseRequest.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.RespFieldFilter = reader.bytes();
                    break;
                case 3:
                    message.Challenge = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("BaseRequest"))
                throw $util.ProtocolError("missing required 'BaseRequest'", { instance: message });
            return message;
        };

        /**
         * Decodes an InitRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof MmBp.InitRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {MmBp.InitRequest} InitRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        InitRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an InitRequest message.
         * @function verify
         * @memberof MmBp.InitRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        InitRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            {
                var error = $root.MmBp.BaseRequest.verify(message.BaseRequest);
                if (error)
                    return "BaseRequest." + error;
            }
            if (message.RespFieldFilter != null && message.hasOwnProperty("RespFieldFilter")) {
                properties._RespFieldFilter = 1;
                if (!(message.RespFieldFilter && typeof message.RespFieldFilter.length === "number" || $util.isString(message.RespFieldFilter)))
                    return "RespFieldFilter: buffer expected";
            }
            if (message.Challenge != null && message.hasOwnProperty("Challenge")) {
                properties._Challenge = 1;
                if (!(message.Challenge && typeof message.Challenge.length === "number" || $util.isString(message.Challenge)))
                    return "Challenge: buffer expected";
            }
            return null;
        };

        /**
         * Creates an InitRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof MmBp.InitRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {MmBp.InitRequest} InitRequest
         */
        InitRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.MmBp.InitRequest)
                return object;
            var message = new $root.MmBp.InitRequest();
            if (object.BaseRequest != null) {
                if (typeof object.BaseRequest !== "object")
                    throw TypeError(".MmBp.InitRequest.BaseRequest: object expected");
                message.BaseRequest = $root.MmBp.BaseRequest.fromObject(object.BaseRequest);
            }
            if (object.RespFieldFilter != null)
                if (typeof object.RespFieldFilter === "string")
                    $util.base64.decode(object.RespFieldFilter, message.RespFieldFilter = $util.newBuffer($util.base64.length(object.RespFieldFilter)), 0);
                else if (object.RespFieldFilter.length)
                    message.RespFieldFilter = object.RespFieldFilter;
            if (object.Challenge != null)
                if (typeof object.Challenge === "string")
                    $util.base64.decode(object.Challenge, message.Challenge = $util.newBuffer($util.base64.length(object.Challenge)), 0);
                else if (object.Challenge.length)
                    message.Challenge = object.Challenge;
            return message;
        };

        /**
         * Creates a plain object from an InitRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof MmBp.InitRequest
         * @static
         * @param {MmBp.InitRequest} message InitRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        InitRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.BaseRequest = null;
            if (message.BaseRequest != null && message.hasOwnProperty("BaseRequest"))
                object.BaseRequest = $root.MmBp.BaseRequest.toObject(message.BaseRequest, options);
            if (message.RespFieldFilter != null && message.hasOwnProperty("RespFieldFilter")) {
                object.RespFieldFilter = options.bytes === String ? $util.base64.encode(message.RespFieldFilter, 0, message.RespFieldFilter.length) : options.bytes === Array ? Array.prototype.slice.call(message.RespFieldFilter) : message.RespFieldFilter;
                if (options.oneofs)
                    object._RespFieldFilter = "RespFieldFilter";
            }
            if (message.Challenge != null && message.hasOwnProperty("Challenge")) {
                object.Challenge = options.bytes === String ? $util.base64.encode(message.Challenge, 0, message.Challenge.length) : options.bytes === Array ? Array.prototype.slice.call(message.Challenge) : message.Challenge;
                if (options.oneofs)
                    object._Challenge = "Challenge";
            }
            return object;
        };

        /**
         * Converts this InitRequest to JSON.
         * @function toJSON
         * @memberof MmBp.InitRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        InitRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return InitRequest;
    })();

    /**
     * EmPlatformType enum.
     * @name MmBp.EmPlatformType
     * @enum {number}
     * @property {number} EPT_ios=1 EPT_ios value
     * @property {number} EPT_andriod=2 EPT_andriod value
     * @property {number} EPT_wp=3 EPT_wp value
     * @property {number} EPT_s60v3=4 EPT_s60v3 value
     * @property {number} EPT_s60v5=5 EPT_s60v5 value
     * @property {number} EPT_s40=6 EPT_s40 value
     * @property {number} EPT_bb=7 EPT_bb value
     */
    MmBp.EmPlatformType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[1] = "EPT_ios"] = 1;
        values[valuesById[2] = "EPT_andriod"] = 2;
        values[valuesById[3] = "EPT_wp"] = 3;
        values[valuesById[4] = "EPT_s60v3"] = 4;
        values[valuesById[5] = "EPT_s60v5"] = 5;
        values[valuesById[6] = "EPT_s40"] = 6;
        values[valuesById[7] = "EPT_bb"] = 7;
        return values;
    })();

    MmBp.InitResponse = (function() {

        /**
         * Properties of an InitResponse.
         * @memberof MmBp
         * @interface IInitResponse
         * @property {MmBp.IBaseResponse} BaseResponse InitResponse BaseResponse
         * @property {number} UserIdHigh InitResponse UserIdHigh
         * @property {number} UserIdLow InitResponse UserIdLow
         * @property {number|null} [ChalleangeAnswer] InitResponse ChalleangeAnswer
         * @property {MmBp.EmInitScence|null} [InitScence] InitResponse InitScence
         * @property {number|null} [AutoSyncMaxDurationSecond] InitResponse AutoSyncMaxDurationSecond
         * @property {string|null} [UserNickName] InitResponse UserNickName
         * @property {MmBp.EmPlatformType|null} [PlatformType] InitResponse PlatformType
         * @property {string|null} [Model] InitResponse Model
         * @property {string|null} [Os] InitResponse Os
         * @property {number|null} [Time] InitResponse Time
         * @property {number|null} [TimeZone] InitResponse TimeZone
         * @property {string|null} [TimeString] InitResponse TimeString
         */

        /**
         * Constructs a new InitResponse.
         * @memberof MmBp
         * @classdesc Represents an InitResponse.
         * @implements IInitResponse
         * @constructor
         * @param {MmBp.IInitResponse=} [properties] Properties to set
         */
        function InitResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * InitResponse BaseResponse.
         * @member {MmBp.IBaseResponse} BaseResponse
         * @memberof MmBp.InitResponse
         * @instance
         */
        InitResponse.prototype.BaseResponse = null;

        /**
         * InitResponse UserIdHigh.
         * @member {number} UserIdHigh
         * @memberof MmBp.InitResponse
         * @instance
         */
        InitResponse.prototype.UserIdHigh = 0;

        /**
         * InitResponse UserIdLow.
         * @member {number} UserIdLow
         * @memberof MmBp.InitResponse
         * @instance
         */
        InitResponse.prototype.UserIdLow = 0;

        /**
         * InitResponse ChalleangeAnswer.
         * @member {number|null|undefined} ChalleangeAnswer
         * @memberof MmBp.InitResponse
         * @instance
         */
        InitResponse.prototype.ChalleangeAnswer = null;

        /**
         * InitResponse InitScence.
         * @member {MmBp.EmInitScence|null|undefined} InitScence
         * @memberof MmBp.InitResponse
         * @instance
         */
        InitResponse.prototype.InitScence = null;

        /**
         * InitResponse AutoSyncMaxDurationSecond.
         * @member {number|null|undefined} AutoSyncMaxDurationSecond
         * @memberof MmBp.InitResponse
         * @instance
         */
        InitResponse.prototype.AutoSyncMaxDurationSecond = null;

        /**
         * InitResponse UserNickName.
         * @member {string|null|undefined} UserNickName
         * @memberof MmBp.InitResponse
         * @instance
         */
        InitResponse.prototype.UserNickName = null;

        /**
         * InitResponse PlatformType.
         * @member {MmBp.EmPlatformType|null|undefined} PlatformType
         * @memberof MmBp.InitResponse
         * @instance
         */
        InitResponse.prototype.PlatformType = null;

        /**
         * InitResponse Model.
         * @member {string|null|undefined} Model
         * @memberof MmBp.InitResponse
         * @instance
         */
        InitResponse.prototype.Model = null;

        /**
         * InitResponse Os.
         * @member {string|null|undefined} Os
         * @memberof MmBp.InitResponse
         * @instance
         */
        InitResponse.prototype.Os = null;

        /**
         * InitResponse Time.
         * @member {number|null|undefined} Time
         * @memberof MmBp.InitResponse
         * @instance
         */
        InitResponse.prototype.Time = null;

        /**
         * InitResponse TimeZone.
         * @member {number|null|undefined} TimeZone
         * @memberof MmBp.InitResponse
         * @instance
         */
        InitResponse.prototype.TimeZone = null;

        /**
         * InitResponse TimeString.
         * @member {string|null|undefined} TimeString
         * @memberof MmBp.InitResponse
         * @instance
         */
        InitResponse.prototype.TimeString = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * InitResponse _ChalleangeAnswer.
         * @member {"ChalleangeAnswer"|undefined} _ChalleangeAnswer
         * @memberof MmBp.InitResponse
         * @instance
         */
        Object.defineProperty(InitResponse.prototype, "_ChalleangeAnswer", {
            get: $util.oneOfGetter($oneOfFields = ["ChalleangeAnswer"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * InitResponse _InitScence.
         * @member {"InitScence"|undefined} _InitScence
         * @memberof MmBp.InitResponse
         * @instance
         */
        Object.defineProperty(InitResponse.prototype, "_InitScence", {
            get: $util.oneOfGetter($oneOfFields = ["InitScence"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * InitResponse _AutoSyncMaxDurationSecond.
         * @member {"AutoSyncMaxDurationSecond"|undefined} _AutoSyncMaxDurationSecond
         * @memberof MmBp.InitResponse
         * @instance
         */
        Object.defineProperty(InitResponse.prototype, "_AutoSyncMaxDurationSecond", {
            get: $util.oneOfGetter($oneOfFields = ["AutoSyncMaxDurationSecond"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * InitResponse _UserNickName.
         * @member {"UserNickName"|undefined} _UserNickName
         * @memberof MmBp.InitResponse
         * @instance
         */
        Object.defineProperty(InitResponse.prototype, "_UserNickName", {
            get: $util.oneOfGetter($oneOfFields = ["UserNickName"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * InitResponse _PlatformType.
         * @member {"PlatformType"|undefined} _PlatformType
         * @memberof MmBp.InitResponse
         * @instance
         */
        Object.defineProperty(InitResponse.prototype, "_PlatformType", {
            get: $util.oneOfGetter($oneOfFields = ["PlatformType"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * InitResponse _Model.
         * @member {"Model"|undefined} _Model
         * @memberof MmBp.InitResponse
         * @instance
         */
        Object.defineProperty(InitResponse.prototype, "_Model", {
            get: $util.oneOfGetter($oneOfFields = ["Model"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * InitResponse _Os.
         * @member {"Os"|undefined} _Os
         * @memberof MmBp.InitResponse
         * @instance
         */
        Object.defineProperty(InitResponse.prototype, "_Os", {
            get: $util.oneOfGetter($oneOfFields = ["Os"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * InitResponse _Time.
         * @member {"Time"|undefined} _Time
         * @memberof MmBp.InitResponse
         * @instance
         */
        Object.defineProperty(InitResponse.prototype, "_Time", {
            get: $util.oneOfGetter($oneOfFields = ["Time"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * InitResponse _TimeZone.
         * @member {"TimeZone"|undefined} _TimeZone
         * @memberof MmBp.InitResponse
         * @instance
         */
        Object.defineProperty(InitResponse.prototype, "_TimeZone", {
            get: $util.oneOfGetter($oneOfFields = ["TimeZone"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * InitResponse _TimeString.
         * @member {"TimeString"|undefined} _TimeString
         * @memberof MmBp.InitResponse
         * @instance
         */
        Object.defineProperty(InitResponse.prototype, "_TimeString", {
            get: $util.oneOfGetter($oneOfFields = ["TimeString"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new InitResponse instance using the specified properties.
         * @function create
         * @memberof MmBp.InitResponse
         * @static
         * @param {MmBp.IInitResponse=} [properties] Properties to set
         * @returns {MmBp.InitResponse} InitResponse instance
         */
        InitResponse.create = function create(properties) {
            return new InitResponse(properties);
        };

        /**
         * Encodes the specified InitResponse message. Does not implicitly {@link MmBp.InitResponse.verify|verify} messages.
         * @function encode
         * @memberof MmBp.InitResponse
         * @static
         * @param {MmBp.IInitResponse} message InitResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        InitResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            $root.MmBp.BaseResponse.encode(message.BaseResponse, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.UserIdHigh);
            writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.UserIdLow);
            if (message.ChalleangeAnswer != null && Object.hasOwnProperty.call(message, "ChalleangeAnswer"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.ChalleangeAnswer);
            if (message.InitScence != null && Object.hasOwnProperty.call(message, "InitScence"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.InitScence);
            if (message.AutoSyncMaxDurationSecond != null && Object.hasOwnProperty.call(message, "AutoSyncMaxDurationSecond"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.AutoSyncMaxDurationSecond);
            if (message.UserNickName != null && Object.hasOwnProperty.call(message, "UserNickName"))
                writer.uint32(/* id 11, wireType 2 =*/90).string(message.UserNickName);
            if (message.PlatformType != null && Object.hasOwnProperty.call(message, "PlatformType"))
                writer.uint32(/* id 12, wireType 0 =*/96).int32(message.PlatformType);
            if (message.Model != null && Object.hasOwnProperty.call(message, "Model"))
                writer.uint32(/* id 13, wireType 2 =*/106).string(message.Model);
            if (message.Os != null && Object.hasOwnProperty.call(message, "Os"))
                writer.uint32(/* id 14, wireType 2 =*/114).string(message.Os);
            if (message.Time != null && Object.hasOwnProperty.call(message, "Time"))
                writer.uint32(/* id 15, wireType 0 =*/120).int32(message.Time);
            if (message.TimeZone != null && Object.hasOwnProperty.call(message, "TimeZone"))
                writer.uint32(/* id 16, wireType 0 =*/128).int32(message.TimeZone);
            if (message.TimeString != null && Object.hasOwnProperty.call(message, "TimeString"))
                writer.uint32(/* id 17, wireType 2 =*/138).string(message.TimeString);
            return writer;
        };

        /**
         * Encodes the specified InitResponse message, length delimited. Does not implicitly {@link MmBp.InitResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof MmBp.InitResponse
         * @static
         * @param {MmBp.IInitResponse} message InitResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        InitResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an InitResponse message from the specified reader or buffer.
         * @function decode
         * @memberof MmBp.InitResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {MmBp.InitResponse} InitResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        InitResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.MmBp.InitResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.BaseResponse = $root.MmBp.BaseResponse.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.UserIdHigh = reader.uint32();
                    break;
                case 3:
                    message.UserIdLow = reader.uint32();
                    break;
                case 4:
                    message.ChalleangeAnswer = reader.uint32();
                    break;
                case 5:
                    message.InitScence = reader.int32();
                    break;
                case 6:
                    message.AutoSyncMaxDurationSecond = reader.uint32();
                    break;
                case 11:
                    message.UserNickName = reader.string();
                    break;
                case 12:
                    message.PlatformType = reader.int32();
                    break;
                case 13:
                    message.Model = reader.string();
                    break;
                case 14:
                    message.Os = reader.string();
                    break;
                case 15:
                    message.Time = reader.int32();
                    break;
                case 16:
                    message.TimeZone = reader.int32();
                    break;
                case 17:
                    message.TimeString = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("BaseResponse"))
                throw $util.ProtocolError("missing required 'BaseResponse'", { instance: message });
            if (!message.hasOwnProperty("UserIdHigh"))
                throw $util.ProtocolError("missing required 'UserIdHigh'", { instance: message });
            if (!message.hasOwnProperty("UserIdLow"))
                throw $util.ProtocolError("missing required 'UserIdLow'", { instance: message });
            return message;
        };

        /**
         * Decodes an InitResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof MmBp.InitResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {MmBp.InitResponse} InitResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        InitResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an InitResponse message.
         * @function verify
         * @memberof MmBp.InitResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        InitResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            {
                var error = $root.MmBp.BaseResponse.verify(message.BaseResponse);
                if (error)
                    return "BaseResponse." + error;
            }
            if (!$util.isInteger(message.UserIdHigh))
                return "UserIdHigh: integer expected";
            if (!$util.isInteger(message.UserIdLow))
                return "UserIdLow: integer expected";
            if (message.ChalleangeAnswer != null && message.hasOwnProperty("ChalleangeAnswer")) {
                properties._ChalleangeAnswer = 1;
                if (!$util.isInteger(message.ChalleangeAnswer))
                    return "ChalleangeAnswer: integer expected";
            }
            if (message.InitScence != null && message.hasOwnProperty("InitScence")) {
                properties._InitScence = 1;
                switch (message.InitScence) {
                default:
                    return "InitScence: enum value expected";
                case 1:
                case 2:
                    break;
                }
            }
            if (message.AutoSyncMaxDurationSecond != null && message.hasOwnProperty("AutoSyncMaxDurationSecond")) {
                properties._AutoSyncMaxDurationSecond = 1;
                if (!$util.isInteger(message.AutoSyncMaxDurationSecond))
                    return "AutoSyncMaxDurationSecond: integer expected";
            }
            if (message.UserNickName != null && message.hasOwnProperty("UserNickName")) {
                properties._UserNickName = 1;
                if (!$util.isString(message.UserNickName))
                    return "UserNickName: string expected";
            }
            if (message.PlatformType != null && message.hasOwnProperty("PlatformType")) {
                properties._PlatformType = 1;
                switch (message.PlatformType) {
                default:
                    return "PlatformType: enum value expected";
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                    break;
                }
            }
            if (message.Model != null && message.hasOwnProperty("Model")) {
                properties._Model = 1;
                if (!$util.isString(message.Model))
                    return "Model: string expected";
            }
            if (message.Os != null && message.hasOwnProperty("Os")) {
                properties._Os = 1;
                if (!$util.isString(message.Os))
                    return "Os: string expected";
            }
            if (message.Time != null && message.hasOwnProperty("Time")) {
                properties._Time = 1;
                if (!$util.isInteger(message.Time))
                    return "Time: integer expected";
            }
            if (message.TimeZone != null && message.hasOwnProperty("TimeZone")) {
                properties._TimeZone = 1;
                if (!$util.isInteger(message.TimeZone))
                    return "TimeZone: integer expected";
            }
            if (message.TimeString != null && message.hasOwnProperty("TimeString")) {
                properties._TimeString = 1;
                if (!$util.isString(message.TimeString))
                    return "TimeString: string expected";
            }
            return null;
        };

        /**
         * Creates an InitResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof MmBp.InitResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {MmBp.InitResponse} InitResponse
         */
        InitResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.MmBp.InitResponse)
                return object;
            var message = new $root.MmBp.InitResponse();
            if (object.BaseResponse != null) {
                if (typeof object.BaseResponse !== "object")
                    throw TypeError(".MmBp.InitResponse.BaseResponse: object expected");
                message.BaseResponse = $root.MmBp.BaseResponse.fromObject(object.BaseResponse);
            }
            if (object.UserIdHigh != null)
                message.UserIdHigh = object.UserIdHigh >>> 0;
            if (object.UserIdLow != null)
                message.UserIdLow = object.UserIdLow >>> 0;
            if (object.ChalleangeAnswer != null)
                message.ChalleangeAnswer = object.ChalleangeAnswer >>> 0;
            switch (object.InitScence) {
            case "EIS_deviceChat":
            case 1:
                message.InitScence = 1;
                break;
            case "EIS_autoSync":
            case 2:
                message.InitScence = 2;
                break;
            }
            if (object.AutoSyncMaxDurationSecond != null)
                message.AutoSyncMaxDurationSecond = object.AutoSyncMaxDurationSecond >>> 0;
            if (object.UserNickName != null)
                message.UserNickName = String(object.UserNickName);
            switch (object.PlatformType) {
            case "EPT_ios":
            case 1:
                message.PlatformType = 1;
                break;
            case "EPT_andriod":
            case 2:
                message.PlatformType = 2;
                break;
            case "EPT_wp":
            case 3:
                message.PlatformType = 3;
                break;
            case "EPT_s60v3":
            case 4:
                message.PlatformType = 4;
                break;
            case "EPT_s60v5":
            case 5:
                message.PlatformType = 5;
                break;
            case "EPT_s40":
            case 6:
                message.PlatformType = 6;
                break;
            case "EPT_bb":
            case 7:
                message.PlatformType = 7;
                break;
            }
            if (object.Model != null)
                message.Model = String(object.Model);
            if (object.Os != null)
                message.Os = String(object.Os);
            if (object.Time != null)
                message.Time = object.Time | 0;
            if (object.TimeZone != null)
                message.TimeZone = object.TimeZone | 0;
            if (object.TimeString != null)
                message.TimeString = String(object.TimeString);
            return message;
        };

        /**
         * Creates a plain object from an InitResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof MmBp.InitResponse
         * @static
         * @param {MmBp.InitResponse} message InitResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        InitResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.BaseResponse = null;
                object.UserIdHigh = 0;
                object.UserIdLow = 0;
            }
            if (message.BaseResponse != null && message.hasOwnProperty("BaseResponse"))
                object.BaseResponse = $root.MmBp.BaseResponse.toObject(message.BaseResponse, options);
            if (message.UserIdHigh != null && message.hasOwnProperty("UserIdHigh"))
                object.UserIdHigh = message.UserIdHigh;
            if (message.UserIdLow != null && message.hasOwnProperty("UserIdLow"))
                object.UserIdLow = message.UserIdLow;
            if (message.ChalleangeAnswer != null && message.hasOwnProperty("ChalleangeAnswer")) {
                object.ChalleangeAnswer = message.ChalleangeAnswer;
                if (options.oneofs)
                    object._ChalleangeAnswer = "ChalleangeAnswer";
            }
            if (message.InitScence != null && message.hasOwnProperty("InitScence")) {
                object.InitScence = options.enums === String ? $root.MmBp.EmInitScence[message.InitScence] : message.InitScence;
                if (options.oneofs)
                    object._InitScence = "InitScence";
            }
            if (message.AutoSyncMaxDurationSecond != null && message.hasOwnProperty("AutoSyncMaxDurationSecond")) {
                object.AutoSyncMaxDurationSecond = message.AutoSyncMaxDurationSecond;
                if (options.oneofs)
                    object._AutoSyncMaxDurationSecond = "AutoSyncMaxDurationSecond";
            }
            if (message.UserNickName != null && message.hasOwnProperty("UserNickName")) {
                object.UserNickName = message.UserNickName;
                if (options.oneofs)
                    object._UserNickName = "UserNickName";
            }
            if (message.PlatformType != null && message.hasOwnProperty("PlatformType")) {
                object.PlatformType = options.enums === String ? $root.MmBp.EmPlatformType[message.PlatformType] : message.PlatformType;
                if (options.oneofs)
                    object._PlatformType = "PlatformType";
            }
            if (message.Model != null && message.hasOwnProperty("Model")) {
                object.Model = message.Model;
                if (options.oneofs)
                    object._Model = "Model";
            }
            if (message.Os != null && message.hasOwnProperty("Os")) {
                object.Os = message.Os;
                if (options.oneofs)
                    object._Os = "Os";
            }
            if (message.Time != null && message.hasOwnProperty("Time")) {
                object.Time = message.Time;
                if (options.oneofs)
                    object._Time = "Time";
            }
            if (message.TimeZone != null && message.hasOwnProperty("TimeZone")) {
                object.TimeZone = message.TimeZone;
                if (options.oneofs)
                    object._TimeZone = "TimeZone";
            }
            if (message.TimeString != null && message.hasOwnProperty("TimeString")) {
                object.TimeString = message.TimeString;
                if (options.oneofs)
                    object._TimeString = "TimeString";
            }
            return object;
        };

        /**
         * Converts this InitResponse to JSON.
         * @function toJSON
         * @memberof MmBp.InitResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        InitResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return InitResponse;
    })();

    /**
     * EmDeviceDataType enum.
     * @name MmBp.EmDeviceDataType
     * @enum {number}
     * @property {number} EDDT_manufatureSvr=0 EDDT_manufatureSvr value
     * @property {number} EDDT_wxWristBand=1 EDDT_wxWristBand value
     * @property {number} EDDT_wxDeviceHtmlChatView=10001 EDDT_wxDeviceHtmlChatView value
     */
    MmBp.EmDeviceDataType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "EDDT_manufatureSvr"] = 0;
        values[valuesById[1] = "EDDT_wxWristBand"] = 1;
        values[valuesById[10001] = "EDDT_wxDeviceHtmlChatView"] = 10001;
        return values;
    })();

    MmBp.SendDataRequest = (function() {

        /**
         * Properties of a SendDataRequest.
         * @memberof MmBp
         * @interface ISendDataRequest
         * @property {MmBp.IBaseRequest} BaseRequest SendDataRequest BaseRequest
         * @property {Uint8Array} Data SendDataRequest Data
         * @property {MmBp.EmDeviceDataType|null} [Type] SendDataRequest Type
         */

        /**
         * Constructs a new SendDataRequest.
         * @memberof MmBp
         * @classdesc Represents a SendDataRequest.
         * @implements ISendDataRequest
         * @constructor
         * @param {MmBp.ISendDataRequest=} [properties] Properties to set
         */
        function SendDataRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SendDataRequest BaseRequest.
         * @member {MmBp.IBaseRequest} BaseRequest
         * @memberof MmBp.SendDataRequest
         * @instance
         */
        SendDataRequest.prototype.BaseRequest = null;

        /**
         * SendDataRequest Data.
         * @member {Uint8Array} Data
         * @memberof MmBp.SendDataRequest
         * @instance
         */
        SendDataRequest.prototype.Data = $util.newBuffer([]);

        /**
         * SendDataRequest Type.
         * @member {MmBp.EmDeviceDataType|null|undefined} Type
         * @memberof MmBp.SendDataRequest
         * @instance
         */
        SendDataRequest.prototype.Type = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * SendDataRequest _Type.
         * @member {"Type"|undefined} _Type
         * @memberof MmBp.SendDataRequest
         * @instance
         */
        Object.defineProperty(SendDataRequest.prototype, "_Type", {
            get: $util.oneOfGetter($oneOfFields = ["Type"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new SendDataRequest instance using the specified properties.
         * @function create
         * @memberof MmBp.SendDataRequest
         * @static
         * @param {MmBp.ISendDataRequest=} [properties] Properties to set
         * @returns {MmBp.SendDataRequest} SendDataRequest instance
         */
        SendDataRequest.create = function create(properties) {
            return new SendDataRequest(properties);
        };

        /**
         * Encodes the specified SendDataRequest message. Does not implicitly {@link MmBp.SendDataRequest.verify|verify} messages.
         * @function encode
         * @memberof MmBp.SendDataRequest
         * @static
         * @param {MmBp.ISendDataRequest} message SendDataRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendDataRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            $root.MmBp.BaseRequest.encode(message.BaseRequest, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.Data);
            if (message.Type != null && Object.hasOwnProperty.call(message, "Type"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.Type);
            return writer;
        };

        /**
         * Encodes the specified SendDataRequest message, length delimited. Does not implicitly {@link MmBp.SendDataRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof MmBp.SendDataRequest
         * @static
         * @param {MmBp.ISendDataRequest} message SendDataRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendDataRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SendDataRequest message from the specified reader or buffer.
         * @function decode
         * @memberof MmBp.SendDataRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {MmBp.SendDataRequest} SendDataRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendDataRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.MmBp.SendDataRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.BaseRequest = $root.MmBp.BaseRequest.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.Data = reader.bytes();
                    break;
                case 3:
                    message.Type = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("BaseRequest"))
                throw $util.ProtocolError("missing required 'BaseRequest'", { instance: message });
            if (!message.hasOwnProperty("Data"))
                throw $util.ProtocolError("missing required 'Data'", { instance: message });
            return message;
        };

        /**
         * Decodes a SendDataRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof MmBp.SendDataRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {MmBp.SendDataRequest} SendDataRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendDataRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SendDataRequest message.
         * @function verify
         * @memberof MmBp.SendDataRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SendDataRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            {
                var error = $root.MmBp.BaseRequest.verify(message.BaseRequest);
                if (error)
                    return "BaseRequest." + error;
            }
            if (!(message.Data && typeof message.Data.length === "number" || $util.isString(message.Data)))
                return "Data: buffer expected";
            if (message.Type != null && message.hasOwnProperty("Type")) {
                properties._Type = 1;
                switch (message.Type) {
                default:
                    return "Type: enum value expected";
                case 0:
                case 1:
                case 10001:
                    break;
                }
            }
            return null;
        };

        /**
         * Creates a SendDataRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof MmBp.SendDataRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {MmBp.SendDataRequest} SendDataRequest
         */
        SendDataRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.MmBp.SendDataRequest)
                return object;
            var message = new $root.MmBp.SendDataRequest();
            if (object.BaseRequest != null) {
                if (typeof object.BaseRequest !== "object")
                    throw TypeError(".MmBp.SendDataRequest.BaseRequest: object expected");
                message.BaseRequest = $root.MmBp.BaseRequest.fromObject(object.BaseRequest);
            }
            if (object.Data != null)
                if (typeof object.Data === "string")
                    $util.base64.decode(object.Data, message.Data = $util.newBuffer($util.base64.length(object.Data)), 0);
                else if (object.Data.length)
                    message.Data = object.Data;
            switch (object.Type) {
            case "EDDT_manufatureSvr":
            case 0:
                message.Type = 0;
                break;
            case "EDDT_wxWristBand":
            case 1:
                message.Type = 1;
                break;
            case "EDDT_wxDeviceHtmlChatView":
            case 10001:
                message.Type = 10001;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a SendDataRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof MmBp.SendDataRequest
         * @static
         * @param {MmBp.SendDataRequest} message SendDataRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SendDataRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.BaseRequest = null;
                if (options.bytes === String)
                    object.Data = "";
                else {
                    object.Data = [];
                    if (options.bytes !== Array)
                        object.Data = $util.newBuffer(object.Data);
                }
            }
            if (message.BaseRequest != null && message.hasOwnProperty("BaseRequest"))
                object.BaseRequest = $root.MmBp.BaseRequest.toObject(message.BaseRequest, options);
            if (message.Data != null && message.hasOwnProperty("Data"))
                object.Data = options.bytes === String ? $util.base64.encode(message.Data, 0, message.Data.length) : options.bytes === Array ? Array.prototype.slice.call(message.Data) : message.Data;
            if (message.Type != null && message.hasOwnProperty("Type")) {
                object.Type = options.enums === String ? $root.MmBp.EmDeviceDataType[message.Type] : message.Type;
                if (options.oneofs)
                    object._Type = "Type";
            }
            return object;
        };

        /**
         * Converts this SendDataRequest to JSON.
         * @function toJSON
         * @memberof MmBp.SendDataRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SendDataRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SendDataRequest;
    })();

    MmBp.SendDataResponse = (function() {

        /**
         * Properties of a SendDataResponse.
         * @memberof MmBp
         * @interface ISendDataResponse
         * @property {MmBp.IBaseResponse} BaseResponse SendDataResponse BaseResponse
         * @property {Uint8Array|null} [Data] SendDataResponse Data
         */

        /**
         * Constructs a new SendDataResponse.
         * @memberof MmBp
         * @classdesc Represents a SendDataResponse.
         * @implements ISendDataResponse
         * @constructor
         * @param {MmBp.ISendDataResponse=} [properties] Properties to set
         */
        function SendDataResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SendDataResponse BaseResponse.
         * @member {MmBp.IBaseResponse} BaseResponse
         * @memberof MmBp.SendDataResponse
         * @instance
         */
        SendDataResponse.prototype.BaseResponse = null;

        /**
         * SendDataResponse Data.
         * @member {Uint8Array|null|undefined} Data
         * @memberof MmBp.SendDataResponse
         * @instance
         */
        SendDataResponse.prototype.Data = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * SendDataResponse _Data.
         * @member {"Data"|undefined} _Data
         * @memberof MmBp.SendDataResponse
         * @instance
         */
        Object.defineProperty(SendDataResponse.prototype, "_Data", {
            get: $util.oneOfGetter($oneOfFields = ["Data"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new SendDataResponse instance using the specified properties.
         * @function create
         * @memberof MmBp.SendDataResponse
         * @static
         * @param {MmBp.ISendDataResponse=} [properties] Properties to set
         * @returns {MmBp.SendDataResponse} SendDataResponse instance
         */
        SendDataResponse.create = function create(properties) {
            return new SendDataResponse(properties);
        };

        /**
         * Encodes the specified SendDataResponse message. Does not implicitly {@link MmBp.SendDataResponse.verify|verify} messages.
         * @function encode
         * @memberof MmBp.SendDataResponse
         * @static
         * @param {MmBp.ISendDataResponse} message SendDataResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendDataResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            $root.MmBp.BaseResponse.encode(message.BaseResponse, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.Data != null && Object.hasOwnProperty.call(message, "Data"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.Data);
            return writer;
        };

        /**
         * Encodes the specified SendDataResponse message, length delimited. Does not implicitly {@link MmBp.SendDataResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof MmBp.SendDataResponse
         * @static
         * @param {MmBp.ISendDataResponse} message SendDataResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendDataResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SendDataResponse message from the specified reader or buffer.
         * @function decode
         * @memberof MmBp.SendDataResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {MmBp.SendDataResponse} SendDataResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendDataResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.MmBp.SendDataResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.BaseResponse = $root.MmBp.BaseResponse.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.Data = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("BaseResponse"))
                throw $util.ProtocolError("missing required 'BaseResponse'", { instance: message });
            return message;
        };

        /**
         * Decodes a SendDataResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof MmBp.SendDataResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {MmBp.SendDataResponse} SendDataResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendDataResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SendDataResponse message.
         * @function verify
         * @memberof MmBp.SendDataResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SendDataResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            {
                var error = $root.MmBp.BaseResponse.verify(message.BaseResponse);
                if (error)
                    return "BaseResponse." + error;
            }
            if (message.Data != null && message.hasOwnProperty("Data")) {
                properties._Data = 1;
                if (!(message.Data && typeof message.Data.length === "number" || $util.isString(message.Data)))
                    return "Data: buffer expected";
            }
            return null;
        };

        /**
         * Creates a SendDataResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof MmBp.SendDataResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {MmBp.SendDataResponse} SendDataResponse
         */
        SendDataResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.MmBp.SendDataResponse)
                return object;
            var message = new $root.MmBp.SendDataResponse();
            if (object.BaseResponse != null) {
                if (typeof object.BaseResponse !== "object")
                    throw TypeError(".MmBp.SendDataResponse.BaseResponse: object expected");
                message.BaseResponse = $root.MmBp.BaseResponse.fromObject(object.BaseResponse);
            }
            if (object.Data != null)
                if (typeof object.Data === "string")
                    $util.base64.decode(object.Data, message.Data = $util.newBuffer($util.base64.length(object.Data)), 0);
                else if (object.Data.length)
                    message.Data = object.Data;
            return message;
        };

        /**
         * Creates a plain object from a SendDataResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof MmBp.SendDataResponse
         * @static
         * @param {MmBp.SendDataResponse} message SendDataResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SendDataResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.BaseResponse = null;
            if (message.BaseResponse != null && message.hasOwnProperty("BaseResponse"))
                object.BaseResponse = $root.MmBp.BaseResponse.toObject(message.BaseResponse, options);
            if (message.Data != null && message.hasOwnProperty("Data")) {
                object.Data = options.bytes === String ? $util.base64.encode(message.Data, 0, message.Data.length) : options.bytes === Array ? Array.prototype.slice.call(message.Data) : message.Data;
                if (options.oneofs)
                    object._Data = "Data";
            }
            return object;
        };

        /**
         * Converts this SendDataResponse to JSON.
         * @function toJSON
         * @memberof MmBp.SendDataResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SendDataResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SendDataResponse;
    })();

    MmBp.RecvDataPush = (function() {

        /**
         * Properties of a RecvDataPush.
         * @memberof MmBp
         * @interface IRecvDataPush
         * @property {MmBp.IBasePush} BasePush RecvDataPush BasePush
         * @property {Uint8Array} Data RecvDataPush Data
         * @property {MmBp.EmDeviceDataType|null} [Type] RecvDataPush Type
         */

        /**
         * Constructs a new RecvDataPush.
         * @memberof MmBp
         * @classdesc Represents a RecvDataPush.
         * @implements IRecvDataPush
         * @constructor
         * @param {MmBp.IRecvDataPush=} [properties] Properties to set
         */
        function RecvDataPush(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RecvDataPush BasePush.
         * @member {MmBp.IBasePush} BasePush
         * @memberof MmBp.RecvDataPush
         * @instance
         */
        RecvDataPush.prototype.BasePush = null;

        /**
         * RecvDataPush Data.
         * @member {Uint8Array} Data
         * @memberof MmBp.RecvDataPush
         * @instance
         */
        RecvDataPush.prototype.Data = $util.newBuffer([]);

        /**
         * RecvDataPush Type.
         * @member {MmBp.EmDeviceDataType|null|undefined} Type
         * @memberof MmBp.RecvDataPush
         * @instance
         */
        RecvDataPush.prototype.Type = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * RecvDataPush _Type.
         * @member {"Type"|undefined} _Type
         * @memberof MmBp.RecvDataPush
         * @instance
         */
        Object.defineProperty(RecvDataPush.prototype, "_Type", {
            get: $util.oneOfGetter($oneOfFields = ["Type"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new RecvDataPush instance using the specified properties.
         * @function create
         * @memberof MmBp.RecvDataPush
         * @static
         * @param {MmBp.IRecvDataPush=} [properties] Properties to set
         * @returns {MmBp.RecvDataPush} RecvDataPush instance
         */
        RecvDataPush.create = function create(properties) {
            return new RecvDataPush(properties);
        };

        /**
         * Encodes the specified RecvDataPush message. Does not implicitly {@link MmBp.RecvDataPush.verify|verify} messages.
         * @function encode
         * @memberof MmBp.RecvDataPush
         * @static
         * @param {MmBp.IRecvDataPush} message RecvDataPush message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RecvDataPush.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            $root.MmBp.BasePush.encode(message.BasePush, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.Data);
            if (message.Type != null && Object.hasOwnProperty.call(message, "Type"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.Type);
            return writer;
        };

        /**
         * Encodes the specified RecvDataPush message, length delimited. Does not implicitly {@link MmBp.RecvDataPush.verify|verify} messages.
         * @function encodeDelimited
         * @memberof MmBp.RecvDataPush
         * @static
         * @param {MmBp.IRecvDataPush} message RecvDataPush message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RecvDataPush.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RecvDataPush message from the specified reader or buffer.
         * @function decode
         * @memberof MmBp.RecvDataPush
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {MmBp.RecvDataPush} RecvDataPush
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RecvDataPush.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.MmBp.RecvDataPush();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.BasePush = $root.MmBp.BasePush.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.Data = reader.bytes();
                    break;
                case 3:
                    message.Type = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("BasePush"))
                throw $util.ProtocolError("missing required 'BasePush'", { instance: message });
            if (!message.hasOwnProperty("Data"))
                throw $util.ProtocolError("missing required 'Data'", { instance: message });
            return message;
        };

        /**
         * Decodes a RecvDataPush message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof MmBp.RecvDataPush
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {MmBp.RecvDataPush} RecvDataPush
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RecvDataPush.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RecvDataPush message.
         * @function verify
         * @memberof MmBp.RecvDataPush
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RecvDataPush.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            {
                var error = $root.MmBp.BasePush.verify(message.BasePush);
                if (error)
                    return "BasePush." + error;
            }
            if (!(message.Data && typeof message.Data.length === "number" || $util.isString(message.Data)))
                return "Data: buffer expected";
            if (message.Type != null && message.hasOwnProperty("Type")) {
                properties._Type = 1;
                switch (message.Type) {
                default:
                    return "Type: enum value expected";
                case 0:
                case 1:
                case 10001:
                    break;
                }
            }
            return null;
        };

        /**
         * Creates a RecvDataPush message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof MmBp.RecvDataPush
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {MmBp.RecvDataPush} RecvDataPush
         */
        RecvDataPush.fromObject = function fromObject(object) {
            if (object instanceof $root.MmBp.RecvDataPush)
                return object;
            var message = new $root.MmBp.RecvDataPush();
            if (object.BasePush != null) {
                if (typeof object.BasePush !== "object")
                    throw TypeError(".MmBp.RecvDataPush.BasePush: object expected");
                message.BasePush = $root.MmBp.BasePush.fromObject(object.BasePush);
            }
            if (object.Data != null)
                if (typeof object.Data === "string")
                    $util.base64.decode(object.Data, message.Data = $util.newBuffer($util.base64.length(object.Data)), 0);
                else if (object.Data.length)
                    message.Data = object.Data;
            switch (object.Type) {
            case "EDDT_manufatureSvr":
            case 0:
                message.Type = 0;
                break;
            case "EDDT_wxWristBand":
            case 1:
                message.Type = 1;
                break;
            case "EDDT_wxDeviceHtmlChatView":
            case 10001:
                message.Type = 10001;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a RecvDataPush message. Also converts values to other types if specified.
         * @function toObject
         * @memberof MmBp.RecvDataPush
         * @static
         * @param {MmBp.RecvDataPush} message RecvDataPush
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RecvDataPush.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.BasePush = null;
                if (options.bytes === String)
                    object.Data = "";
                else {
                    object.Data = [];
                    if (options.bytes !== Array)
                        object.Data = $util.newBuffer(object.Data);
                }
            }
            if (message.BasePush != null && message.hasOwnProperty("BasePush"))
                object.BasePush = $root.MmBp.BasePush.toObject(message.BasePush, options);
            if (message.Data != null && message.hasOwnProperty("Data"))
                object.Data = options.bytes === String ? $util.base64.encode(message.Data, 0, message.Data.length) : options.bytes === Array ? Array.prototype.slice.call(message.Data) : message.Data;
            if (message.Type != null && message.hasOwnProperty("Type")) {
                object.Type = options.enums === String ? $root.MmBp.EmDeviceDataType[message.Type] : message.Type;
                if (options.oneofs)
                    object._Type = "Type";
            }
            return object;
        };

        /**
         * Converts this RecvDataPush to JSON.
         * @function toJSON
         * @memberof MmBp.RecvDataPush
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RecvDataPush.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RecvDataPush;
    })();

    /**
     * EmSwitchViewOp enum.
     * @name MmBp.EmSwitchViewOp
     * @enum {number}
     * @property {number} ESVO_enter=1 ESVO_enter value
     * @property {number} ESVO_exit=2 ESVO_exit value
     */
    MmBp.EmSwitchViewOp = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[1] = "ESVO_enter"] = 1;
        values[valuesById[2] = "ESVO_exit"] = 2;
        return values;
    })();

    /**
     * EmViewId enum.
     * @name MmBp.EmViewId
     * @enum {number}
     * @property {number} EVI_deviceChatView=1 EVI_deviceChatView value
     */
    MmBp.EmViewId = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[1] = "EVI_deviceChatView"] = 1;
        return values;
    })();

    MmBp.SwitchViewPush = (function() {

        /**
         * Properties of a SwitchViewPush.
         * @memberof MmBp
         * @interface ISwitchViewPush
         * @property {MmBp.IBasePush} BasePush SwitchViewPush BasePush
         * @property {MmBp.EmSwitchViewOp} SwitchViewOp SwitchViewPush SwitchViewOp
         * @property {MmBp.EmViewId} ViewId SwitchViewPush ViewId
         */

        /**
         * Constructs a new SwitchViewPush.
         * @memberof MmBp
         * @classdesc Represents a SwitchViewPush.
         * @implements ISwitchViewPush
         * @constructor
         * @param {MmBp.ISwitchViewPush=} [properties] Properties to set
         */
        function SwitchViewPush(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SwitchViewPush BasePush.
         * @member {MmBp.IBasePush} BasePush
         * @memberof MmBp.SwitchViewPush
         * @instance
         */
        SwitchViewPush.prototype.BasePush = null;

        /**
         * SwitchViewPush SwitchViewOp.
         * @member {MmBp.EmSwitchViewOp} SwitchViewOp
         * @memberof MmBp.SwitchViewPush
         * @instance
         */
        SwitchViewPush.prototype.SwitchViewOp = 1;

        /**
         * SwitchViewPush ViewId.
         * @member {MmBp.EmViewId} ViewId
         * @memberof MmBp.SwitchViewPush
         * @instance
         */
        SwitchViewPush.prototype.ViewId = 1;

        /**
         * Creates a new SwitchViewPush instance using the specified properties.
         * @function create
         * @memberof MmBp.SwitchViewPush
         * @static
         * @param {MmBp.ISwitchViewPush=} [properties] Properties to set
         * @returns {MmBp.SwitchViewPush} SwitchViewPush instance
         */
        SwitchViewPush.create = function create(properties) {
            return new SwitchViewPush(properties);
        };

        /**
         * Encodes the specified SwitchViewPush message. Does not implicitly {@link MmBp.SwitchViewPush.verify|verify} messages.
         * @function encode
         * @memberof MmBp.SwitchViewPush
         * @static
         * @param {MmBp.ISwitchViewPush} message SwitchViewPush message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SwitchViewPush.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            $root.MmBp.BasePush.encode(message.BasePush, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.SwitchViewOp);
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.ViewId);
            return writer;
        };

        /**
         * Encodes the specified SwitchViewPush message, length delimited. Does not implicitly {@link MmBp.SwitchViewPush.verify|verify} messages.
         * @function encodeDelimited
         * @memberof MmBp.SwitchViewPush
         * @static
         * @param {MmBp.ISwitchViewPush} message SwitchViewPush message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SwitchViewPush.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SwitchViewPush message from the specified reader or buffer.
         * @function decode
         * @memberof MmBp.SwitchViewPush
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {MmBp.SwitchViewPush} SwitchViewPush
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SwitchViewPush.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.MmBp.SwitchViewPush();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.BasePush = $root.MmBp.BasePush.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.SwitchViewOp = reader.int32();
                    break;
                case 3:
                    message.ViewId = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("BasePush"))
                throw $util.ProtocolError("missing required 'BasePush'", { instance: message });
            if (!message.hasOwnProperty("SwitchViewOp"))
                throw $util.ProtocolError("missing required 'SwitchViewOp'", { instance: message });
            if (!message.hasOwnProperty("ViewId"))
                throw $util.ProtocolError("missing required 'ViewId'", { instance: message });
            return message;
        };

        /**
         * Decodes a SwitchViewPush message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof MmBp.SwitchViewPush
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {MmBp.SwitchViewPush} SwitchViewPush
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SwitchViewPush.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SwitchViewPush message.
         * @function verify
         * @memberof MmBp.SwitchViewPush
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SwitchViewPush.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            {
                var error = $root.MmBp.BasePush.verify(message.BasePush);
                if (error)
                    return "BasePush." + error;
            }
            switch (message.SwitchViewOp) {
            default:
                return "SwitchViewOp: enum value expected";
            case 1:
            case 2:
                break;
            }
            switch (message.ViewId) {
            default:
                return "ViewId: enum value expected";
            case 1:
                break;
            }
            return null;
        };

        /**
         * Creates a SwitchViewPush message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof MmBp.SwitchViewPush
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {MmBp.SwitchViewPush} SwitchViewPush
         */
        SwitchViewPush.fromObject = function fromObject(object) {
            if (object instanceof $root.MmBp.SwitchViewPush)
                return object;
            var message = new $root.MmBp.SwitchViewPush();
            if (object.BasePush != null) {
                if (typeof object.BasePush !== "object")
                    throw TypeError(".MmBp.SwitchViewPush.BasePush: object expected");
                message.BasePush = $root.MmBp.BasePush.fromObject(object.BasePush);
            }
            switch (object.SwitchViewOp) {
            case "ESVO_enter":
            case 1:
                message.SwitchViewOp = 1;
                break;
            case "ESVO_exit":
            case 2:
                message.SwitchViewOp = 2;
                break;
            }
            switch (object.ViewId) {
            case "EVI_deviceChatView":
            case 1:
                message.ViewId = 1;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a SwitchViewPush message. Also converts values to other types if specified.
         * @function toObject
         * @memberof MmBp.SwitchViewPush
         * @static
         * @param {MmBp.SwitchViewPush} message SwitchViewPush
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SwitchViewPush.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.BasePush = null;
                object.SwitchViewOp = options.enums === String ? "ESVO_enter" : 1;
                object.ViewId = options.enums === String ? "EVI_deviceChatView" : 1;
            }
            if (message.BasePush != null && message.hasOwnProperty("BasePush"))
                object.BasePush = $root.MmBp.BasePush.toObject(message.BasePush, options);
            if (message.SwitchViewOp != null && message.hasOwnProperty("SwitchViewOp"))
                object.SwitchViewOp = options.enums === String ? $root.MmBp.EmSwitchViewOp[message.SwitchViewOp] : message.SwitchViewOp;
            if (message.ViewId != null && message.hasOwnProperty("ViewId"))
                object.ViewId = options.enums === String ? $root.MmBp.EmViewId[message.ViewId] : message.ViewId;
            return object;
        };

        /**
         * Converts this SwitchViewPush to JSON.
         * @function toJSON
         * @memberof MmBp.SwitchViewPush
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SwitchViewPush.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SwitchViewPush;
    })();

    /**
     * EmSwitchBackgroundOp enum.
     * @name MmBp.EmSwitchBackgroundOp
     * @enum {number}
     * @property {number} ESBO_enterBackground=1 ESBO_enterBackground value
     * @property {number} ESBO_enterForground=2 ESBO_enterForground value
     * @property {number} ESBO_sleep=3 ESBO_sleep value
     */
    MmBp.EmSwitchBackgroundOp = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[1] = "ESBO_enterBackground"] = 1;
        values[valuesById[2] = "ESBO_enterForground"] = 2;
        values[valuesById[3] = "ESBO_sleep"] = 3;
        return values;
    })();

    MmBp.SwitchBackgroudPush = (function() {

        /**
         * Properties of a SwitchBackgroudPush.
         * @memberof MmBp
         * @interface ISwitchBackgroudPush
         * @property {MmBp.IBasePush} BasePush SwitchBackgroudPush BasePush
         * @property {MmBp.EmSwitchBackgroundOp} SwitchBackgroundOp SwitchBackgroudPush SwitchBackgroundOp
         */

        /**
         * Constructs a new SwitchBackgroudPush.
         * @memberof MmBp
         * @classdesc Represents a SwitchBackgroudPush.
         * @implements ISwitchBackgroudPush
         * @constructor
         * @param {MmBp.ISwitchBackgroudPush=} [properties] Properties to set
         */
        function SwitchBackgroudPush(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SwitchBackgroudPush BasePush.
         * @member {MmBp.IBasePush} BasePush
         * @memberof MmBp.SwitchBackgroudPush
         * @instance
         */
        SwitchBackgroudPush.prototype.BasePush = null;

        /**
         * SwitchBackgroudPush SwitchBackgroundOp.
         * @member {MmBp.EmSwitchBackgroundOp} SwitchBackgroundOp
         * @memberof MmBp.SwitchBackgroudPush
         * @instance
         */
        SwitchBackgroudPush.prototype.SwitchBackgroundOp = 1;

        /**
         * Creates a new SwitchBackgroudPush instance using the specified properties.
         * @function create
         * @memberof MmBp.SwitchBackgroudPush
         * @static
         * @param {MmBp.ISwitchBackgroudPush=} [properties] Properties to set
         * @returns {MmBp.SwitchBackgroudPush} SwitchBackgroudPush instance
         */
        SwitchBackgroudPush.create = function create(properties) {
            return new SwitchBackgroudPush(properties);
        };

        /**
         * Encodes the specified SwitchBackgroudPush message. Does not implicitly {@link MmBp.SwitchBackgroudPush.verify|verify} messages.
         * @function encode
         * @memberof MmBp.SwitchBackgroudPush
         * @static
         * @param {MmBp.ISwitchBackgroudPush} message SwitchBackgroudPush message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SwitchBackgroudPush.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            $root.MmBp.BasePush.encode(message.BasePush, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.SwitchBackgroundOp);
            return writer;
        };

        /**
         * Encodes the specified SwitchBackgroudPush message, length delimited. Does not implicitly {@link MmBp.SwitchBackgroudPush.verify|verify} messages.
         * @function encodeDelimited
         * @memberof MmBp.SwitchBackgroudPush
         * @static
         * @param {MmBp.ISwitchBackgroudPush} message SwitchBackgroudPush message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SwitchBackgroudPush.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SwitchBackgroudPush message from the specified reader or buffer.
         * @function decode
         * @memberof MmBp.SwitchBackgroudPush
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {MmBp.SwitchBackgroudPush} SwitchBackgroudPush
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SwitchBackgroudPush.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.MmBp.SwitchBackgroudPush();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.BasePush = $root.MmBp.BasePush.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.SwitchBackgroundOp = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("BasePush"))
                throw $util.ProtocolError("missing required 'BasePush'", { instance: message });
            if (!message.hasOwnProperty("SwitchBackgroundOp"))
                throw $util.ProtocolError("missing required 'SwitchBackgroundOp'", { instance: message });
            return message;
        };

        /**
         * Decodes a SwitchBackgroudPush message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof MmBp.SwitchBackgroudPush
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {MmBp.SwitchBackgroudPush} SwitchBackgroudPush
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SwitchBackgroudPush.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SwitchBackgroudPush message.
         * @function verify
         * @memberof MmBp.SwitchBackgroudPush
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SwitchBackgroudPush.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            {
                var error = $root.MmBp.BasePush.verify(message.BasePush);
                if (error)
                    return "BasePush." + error;
            }
            switch (message.SwitchBackgroundOp) {
            default:
                return "SwitchBackgroundOp: enum value expected";
            case 1:
            case 2:
            case 3:
                break;
            }
            return null;
        };

        /**
         * Creates a SwitchBackgroudPush message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof MmBp.SwitchBackgroudPush
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {MmBp.SwitchBackgroudPush} SwitchBackgroudPush
         */
        SwitchBackgroudPush.fromObject = function fromObject(object) {
            if (object instanceof $root.MmBp.SwitchBackgroudPush)
                return object;
            var message = new $root.MmBp.SwitchBackgroudPush();
            if (object.BasePush != null) {
                if (typeof object.BasePush !== "object")
                    throw TypeError(".MmBp.SwitchBackgroudPush.BasePush: object expected");
                message.BasePush = $root.MmBp.BasePush.fromObject(object.BasePush);
            }
            switch (object.SwitchBackgroundOp) {
            case "ESBO_enterBackground":
            case 1:
                message.SwitchBackgroundOp = 1;
                break;
            case "ESBO_enterForground":
            case 2:
                message.SwitchBackgroundOp = 2;
                break;
            case "ESBO_sleep":
            case 3:
                message.SwitchBackgroundOp = 3;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a SwitchBackgroudPush message. Also converts values to other types if specified.
         * @function toObject
         * @memberof MmBp.SwitchBackgroudPush
         * @static
         * @param {MmBp.SwitchBackgroudPush} message SwitchBackgroudPush
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SwitchBackgroudPush.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.BasePush = null;
                object.SwitchBackgroundOp = options.enums === String ? "ESBO_enterBackground" : 1;
            }
            if (message.BasePush != null && message.hasOwnProperty("BasePush"))
                object.BasePush = $root.MmBp.BasePush.toObject(message.BasePush, options);
            if (message.SwitchBackgroundOp != null && message.hasOwnProperty("SwitchBackgroundOp"))
                object.SwitchBackgroundOp = options.enums === String ? $root.MmBp.EmSwitchBackgroundOp[message.SwitchBackgroundOp] : message.SwitchBackgroundOp;
            return object;
        };

        /**
         * Converts this SwitchBackgroudPush to JSON.
         * @function toJSON
         * @memberof MmBp.SwitchBackgroudPush
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SwitchBackgroudPush.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SwitchBackgroudPush;
    })();

    return MmBp;
})();

module.exports = $root;
