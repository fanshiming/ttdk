/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobuf.min.js");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.common = (function() {

    /**
     * Namespace common.
     * @exports common
     * @namespace
     */
    var common = {};

    common.ErrorInfo = (function() {

        /**
         * Properties of an ErrorInfo.
         * @memberof common
         * @interface IErrorInfo
         * @property {number|null} [errorCode] ErrorInfo errorCode
         * @property {Uint8Array|null} [errorMessage] ErrorInfo errorMessage
         */

        /**
         * Constructs a new ErrorInfo.
         * @memberof common
         * @classdesc Represents an ErrorInfo.
         * @implements IErrorInfo
         * @constructor
         * @param {common.IErrorInfo=} [properties] Properties to set
         */
        function ErrorInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ErrorInfo errorCode.
         * @member {number} errorCode
         * @memberof common.ErrorInfo
         * @instance
         */
        ErrorInfo.prototype.errorCode = 0;

        /**
         * ErrorInfo errorMessage.
         * @member {Uint8Array} errorMessage
         * @memberof common.ErrorInfo
         * @instance
         */
        ErrorInfo.prototype.errorMessage = $util.newBuffer([]);

        /**
         * Creates a new ErrorInfo instance using the specified properties.
         * @function create
         * @memberof common.ErrorInfo
         * @static
         * @param {common.IErrorInfo=} [properties] Properties to set
         * @returns {common.ErrorInfo} ErrorInfo instance
         */
        ErrorInfo.create = function create(properties) {
            return new ErrorInfo(properties);
        };

        /**
         * Encodes the specified ErrorInfo message. Does not implicitly {@link common.ErrorInfo.verify|verify} messages.
         * @function encode
         * @memberof common.ErrorInfo
         * @static
         * @param {common.IErrorInfo} message ErrorInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ErrorInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.errorCode != null && Object.hasOwnProperty.call(message, "errorCode"))
                writer.uint32(/* id 1, wireType 5 =*/13).fixed32(message.errorCode);
            if (message.errorMessage != null && Object.hasOwnProperty.call(message, "errorMessage"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.errorMessage);
            return writer;
        };

        /**
         * Encodes the specified ErrorInfo message, length delimited. Does not implicitly {@link common.ErrorInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof common.ErrorInfo
         * @static
         * @param {common.IErrorInfo} message ErrorInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ErrorInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ErrorInfo message from the specified reader or buffer.
         * @function decode
         * @memberof common.ErrorInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {common.ErrorInfo} ErrorInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ErrorInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.ErrorInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.errorCode = reader.fixed32();
                    break;
                case 2:
                    message.errorMessage = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an ErrorInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof common.ErrorInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {common.ErrorInfo} ErrorInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ErrorInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ErrorInfo message.
         * @function verify
         * @memberof common.ErrorInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ErrorInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.errorCode != null && message.hasOwnProperty("errorCode"))
                if (!$util.isInteger(message.errorCode))
                    return "errorCode: integer expected";
            if (message.errorMessage != null && message.hasOwnProperty("errorMessage"))
                if (!(message.errorMessage && typeof message.errorMessage.length === "number" || $util.isString(message.errorMessage)))
                    return "errorMessage: buffer expected";
            return null;
        };

        /**
         * Creates an ErrorInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof common.ErrorInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {common.ErrorInfo} ErrorInfo
         */
        ErrorInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.common.ErrorInfo)
                return object;
            var message = new $root.common.ErrorInfo();
            if (object.errorCode != null)
                message.errorCode = object.errorCode >>> 0;
            if (object.errorMessage != null)
                if (typeof object.errorMessage === "string")
                    $util.base64.decode(object.errorMessage, message.errorMessage = $util.newBuffer($util.base64.length(object.errorMessage)), 0);
                else if (object.errorMessage.length)
                    message.errorMessage = object.errorMessage;
            return message;
        };

        /**
         * Creates a plain object from an ErrorInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof common.ErrorInfo
         * @static
         * @param {common.ErrorInfo} message ErrorInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ErrorInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.errorCode = 0;
                if (options.bytes === String)
                    object.errorMessage = "";
                else {
                    object.errorMessage = [];
                    if (options.bytes !== Array)
                        object.errorMessage = $util.newBuffer(object.errorMessage);
                }
            }
            if (message.errorCode != null && message.hasOwnProperty("errorCode"))
                object.errorCode = message.errorCode;
            if (message.errorMessage != null && message.hasOwnProperty("errorMessage"))
                object.errorMessage = options.bytes === String ? $util.base64.encode(message.errorMessage, 0, message.errorMessage.length) : options.bytes === Array ? Array.prototype.slice.call(message.errorMessage) : message.errorMessage;
            return object;
        };

        /**
         * Converts this ErrorInfo to JSON.
         * @function toJSON
         * @memberof common.ErrorInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ErrorInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ErrorInfo;
    })();

    common.AwesomeMessage = (function() {

        /**
         * Properties of an AwesomeMessage.
         * @memberof common
         * @interface IAwesomeMessage
         * @property {number|null} [version] AwesomeMessage version
         * @property {number|null} [app] AwesomeMessage app
         * @property {number|null} [server] AwesomeMessage server
         * @property {number|null} [servant] AwesomeMessage servant
         * @property {Uint8Array|null} [data] AwesomeMessage data
         */

        /**
         * Constructs a new AwesomeMessage.
         * @memberof common
         * @classdesc Represents an AwesomeMessage.
         * @implements IAwesomeMessage
         * @constructor
         * @param {common.IAwesomeMessage=} [properties] Properties to set
         */
        function AwesomeMessage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AwesomeMessage version.
         * @member {number} version
         * @memberof common.AwesomeMessage
         * @instance
         */
        AwesomeMessage.prototype.version = 0;

        /**
         * AwesomeMessage app.
         * @member {number} app
         * @memberof common.AwesomeMessage
         * @instance
         */
        AwesomeMessage.prototype.app = 0;

        /**
         * AwesomeMessage server.
         * @member {number} server
         * @memberof common.AwesomeMessage
         * @instance
         */
        AwesomeMessage.prototype.server = 0;

        /**
         * AwesomeMessage servant.
         * @member {number} servant
         * @memberof common.AwesomeMessage
         * @instance
         */
        AwesomeMessage.prototype.servant = 0;

        /**
         * AwesomeMessage data.
         * @member {Uint8Array} data
         * @memberof common.AwesomeMessage
         * @instance
         */
        AwesomeMessage.prototype.data = $util.newBuffer([]);

        /**
         * Creates a new AwesomeMessage instance using the specified properties.
         * @function create
         * @memberof common.AwesomeMessage
         * @static
         * @param {common.IAwesomeMessage=} [properties] Properties to set
         * @returns {common.AwesomeMessage} AwesomeMessage instance
         */
        AwesomeMessage.create = function create(properties) {
            return new AwesomeMessage(properties);
        };

        /**
         * Encodes the specified AwesomeMessage message. Does not implicitly {@link common.AwesomeMessage.verify|verify} messages.
         * @function encode
         * @memberof common.AwesomeMessage
         * @static
         * @param {common.IAwesomeMessage} message AwesomeMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AwesomeMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.version != null && Object.hasOwnProperty.call(message, "version"))
                writer.uint32(/* id 1, wireType 5 =*/13).fixed32(message.version);
            if (message.app != null && Object.hasOwnProperty.call(message, "app"))
                writer.uint32(/* id 2, wireType 5 =*/21).fixed32(message.app);
            if (message.server != null && Object.hasOwnProperty.call(message, "server"))
                writer.uint32(/* id 3, wireType 5 =*/29).fixed32(message.server);
            if (message.servant != null && Object.hasOwnProperty.call(message, "servant"))
                writer.uint32(/* id 4, wireType 5 =*/37).fixed32(message.servant);
            if (message.data != null && Object.hasOwnProperty.call(message, "data"))
                writer.uint32(/* id 9, wireType 2 =*/74).bytes(message.data);
            return writer;
        };

        /**
         * Encodes the specified AwesomeMessage message, length delimited. Does not implicitly {@link common.AwesomeMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof common.AwesomeMessage
         * @static
         * @param {common.IAwesomeMessage} message AwesomeMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AwesomeMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AwesomeMessage message from the specified reader or buffer.
         * @function decode
         * @memberof common.AwesomeMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {common.AwesomeMessage} AwesomeMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AwesomeMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.AwesomeMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.version = reader.fixed32();
                    break;
                case 2:
                    message.app = reader.fixed32();
                    break;
                case 3:
                    message.server = reader.fixed32();
                    break;
                case 4:
                    message.servant = reader.fixed32();
                    break;
                case 9:
                    message.data = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AwesomeMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof common.AwesomeMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {common.AwesomeMessage} AwesomeMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AwesomeMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AwesomeMessage message.
         * @function verify
         * @memberof common.AwesomeMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AwesomeMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.version != null && message.hasOwnProperty("version"))
                if (!$util.isInteger(message.version))
                    return "version: integer expected";
            if (message.app != null && message.hasOwnProperty("app"))
                if (!$util.isInteger(message.app))
                    return "app: integer expected";
            if (message.server != null && message.hasOwnProperty("server"))
                if (!$util.isInteger(message.server))
                    return "server: integer expected";
            if (message.servant != null && message.hasOwnProperty("servant"))
                if (!$util.isInteger(message.servant))
                    return "servant: integer expected";
            if (message.data != null && message.hasOwnProperty("data"))
                if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                    return "data: buffer expected";
            return null;
        };

        /**
         * Creates an AwesomeMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof common.AwesomeMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {common.AwesomeMessage} AwesomeMessage
         */
        AwesomeMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.common.AwesomeMessage)
                return object;
            var message = new $root.common.AwesomeMessage();
            if (object.version != null)
                message.version = object.version >>> 0;
            if (object.app != null)
                message.app = object.app >>> 0;
            if (object.server != null)
                message.server = object.server >>> 0;
            if (object.servant != null)
                message.servant = object.servant >>> 0;
            if (object.data != null)
                if (typeof object.data === "string")
                    $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
                else if (object.data.length)
                    message.data = object.data;
            return message;
        };

        /**
         * Creates a plain object from an AwesomeMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof common.AwesomeMessage
         * @static
         * @param {common.AwesomeMessage} message AwesomeMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AwesomeMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.version = 0;
                object.app = 0;
                object.server = 0;
                object.servant = 0;
                if (options.bytes === String)
                    object.data = "";
                else {
                    object.data = [];
                    if (options.bytes !== Array)
                        object.data = $util.newBuffer(object.data);
                }
            }
            if (message.version != null && message.hasOwnProperty("version"))
                object.version = message.version;
            if (message.app != null && message.hasOwnProperty("app"))
                object.app = message.app;
            if (message.server != null && message.hasOwnProperty("server"))
                object.server = message.server;
            if (message.servant != null && message.hasOwnProperty("servant"))
                object.servant = message.servant;
            if (message.data != null && message.hasOwnProperty("data"))
                object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
            return object;
        };

        /**
         * Converts this AwesomeMessage to JSON.
         * @function toJSON
         * @memberof common.AwesomeMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AwesomeMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AwesomeMessage;
    })();

    return common;
})();

module.exports = $root;
