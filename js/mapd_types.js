//
// Autogenerated by Thrift Compiler (0.9.2)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//


TDatumType = {
  'INT' : 0,
  'REAL' : 1,
  'STR' : 2,
  'TIME' : 3,
  'TIMESTAMP' : 4,
  'DATE' : 5,
  'BOOL' : 6
};
TExecuteMode = {
  'HYBRID' : 0,
  'GPU' : 1,
  'CPU' : 2
};
TDatum = function(args) {
  this.int_val = null;
  this.real_val = null;
  this.str_val = null;
  if (args) {
    if (args.int_val !== undefined) {
      this.int_val = args.int_val;
    }
    if (args.real_val !== undefined) {
      this.real_val = args.real_val;
    }
    if (args.str_val !== undefined) {
      this.str_val = args.str_val;
    }
  }
};
TDatum.prototype = {};
TDatum.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.I64) {
        this.int_val = input.readI64().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.DOUBLE) {
        this.real_val = input.readDouble().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.str_val = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

TDatum.prototype.write = function(output) {
  output.writeStructBegin('TDatum');
  if (this.int_val !== null && this.int_val !== undefined) {
    output.writeFieldBegin('int_val', Thrift.Type.I64, 1);
    output.writeI64(this.int_val);
    output.writeFieldEnd();
  }
  if (this.real_val !== null && this.real_val !== undefined) {
    output.writeFieldBegin('real_val', Thrift.Type.DOUBLE, 2);
    output.writeDouble(this.real_val);
    output.writeFieldEnd();
  }
  if (this.str_val !== null && this.str_val !== undefined) {
    output.writeFieldBegin('str_val', Thrift.Type.STRING, 3);
    output.writeString(this.str_val);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

TColumnValue = function(args) {
  this.datum = null;
  this.is_null = null;
  if (args) {
    if (args.datum !== undefined) {
      this.datum = args.datum;
    }
    if (args.is_null !== undefined) {
      this.is_null = args.is_null;
    }
  }
};
TColumnValue.prototype = {};
TColumnValue.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.datum = new TDatum();
        this.datum.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.BOOL) {
        this.is_null = input.readBool().value;
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

TColumnValue.prototype.write = function(output) {
  output.writeStructBegin('TColumnValue');
  if (this.datum !== null && this.datum !== undefined) {
    output.writeFieldBegin('datum', Thrift.Type.STRUCT, 1);
    this.datum.write(output);
    output.writeFieldEnd();
  }
  if (this.is_null !== null && this.is_null !== undefined) {
    output.writeFieldBegin('is_null', Thrift.Type.BOOL, 2);
    output.writeBool(this.is_null);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

TTypeInfo = function(args) {
  this.type = null;
  this.nullable = null;
  if (args) {
    if (args.type !== undefined) {
      this.type = args.type;
    }
    if (args.nullable !== undefined) {
      this.nullable = args.nullable;
    }
  }
};
TTypeInfo.prototype = {};
TTypeInfo.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.I32) {
        this.type = input.readI32().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.BOOL) {
        this.nullable = input.readBool().value;
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

TTypeInfo.prototype.write = function(output) {
  output.writeStructBegin('TTypeInfo');
  if (this.type !== null && this.type !== undefined) {
    output.writeFieldBegin('type', Thrift.Type.I32, 1);
    output.writeI32(this.type);
    output.writeFieldEnd();
  }
  if (this.nullable !== null && this.nullable !== undefined) {
    output.writeFieldBegin('nullable', Thrift.Type.BOOL, 2);
    output.writeBool(this.nullable);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

TColumnType = function(args) {
  this.col_name = null;
  this.col_type = null;
  if (args) {
    if (args.col_name !== undefined) {
      this.col_name = args.col_name;
    }
    if (args.col_type !== undefined) {
      this.col_type = args.col_type;
    }
  }
};
TColumnType.prototype = {};
TColumnType.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.col_name = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRUCT) {
        this.col_type = new TTypeInfo();
        this.col_type.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

TColumnType.prototype.write = function(output) {
  output.writeStructBegin('TColumnType');
  if (this.col_name !== null && this.col_name !== undefined) {
    output.writeFieldBegin('col_name', Thrift.Type.STRING, 1);
    output.writeString(this.col_name);
    output.writeFieldEnd();
  }
  if (this.col_type !== null && this.col_type !== undefined) {
    output.writeFieldBegin('col_type', Thrift.Type.STRUCT, 2);
    this.col_type.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

TRow = function(args) {
  this.cols = null;
  if (args) {
    if (args.cols !== undefined) {
      this.cols = args.cols;
    }
  }
};
TRow.prototype = {};
TRow.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.LIST) {
        var _size0 = 0;
        var _rtmp34;
        this.cols = [];
        var _etype3 = 0;
        _rtmp34 = input.readListBegin();
        _etype3 = _rtmp34.etype;
        _size0 = _rtmp34.size;
        for (var _i5 = 0; _i5 < _size0; ++_i5)
        {
          var elem6 = null;
          elem6 = new TColumnValue();
          elem6.read(input);
          this.cols.push(elem6);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

TRow.prototype.write = function(output) {
  output.writeStructBegin('TRow');
  if (this.cols !== null && this.cols !== undefined) {
    output.writeFieldBegin('cols', Thrift.Type.LIST, 1);
    output.writeListBegin(Thrift.Type.STRUCT, this.cols.length);
    for (var iter7 in this.cols)
    {
      if (this.cols.hasOwnProperty(iter7))
      {
        iter7 = this.cols[iter7];
        iter7.write(output);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

TRowSet = function(args) {
  this.row_desc = null;
  this.rows = null;
  if (args) {
    if (args.row_desc !== undefined) {
      this.row_desc = args.row_desc;
    }
    if (args.rows !== undefined) {
      this.rows = args.rows;
    }
  }
};
TRowSet.prototype = {};
TRowSet.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.LIST) {
        var _size8 = 0;
        var _rtmp312;
        this.row_desc = [];
        var _etype11 = 0;
        _rtmp312 = input.readListBegin();
        _etype11 = _rtmp312.etype;
        _size8 = _rtmp312.size;
        for (var _i13 = 0; _i13 < _size8; ++_i13)
        {
          var elem14 = null;
          elem14 = new TColumnType();
          elem14.read(input);
          this.row_desc.push(elem14);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.LIST) {
        var _size15 = 0;
        var _rtmp319;
        this.rows = [];
        var _etype18 = 0;
        _rtmp319 = input.readListBegin();
        _etype18 = _rtmp319.etype;
        _size15 = _rtmp319.size;
        for (var _i20 = 0; _i20 < _size15; ++_i20)
        {
          var elem21 = null;
          elem21 = new TRow();
          elem21.read(input);
          this.rows.push(elem21);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

TRowSet.prototype.write = function(output) {
  output.writeStructBegin('TRowSet');
  if (this.row_desc !== null && this.row_desc !== undefined) {
    output.writeFieldBegin('row_desc', Thrift.Type.LIST, 1);
    output.writeListBegin(Thrift.Type.STRUCT, this.row_desc.length);
    for (var iter22 in this.row_desc)
    {
      if (this.row_desc.hasOwnProperty(iter22))
      {
        iter22 = this.row_desc[iter22];
        iter22.write(output);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  if (this.rows !== null && this.rows !== undefined) {
    output.writeFieldBegin('rows', Thrift.Type.LIST, 2);
    output.writeListBegin(Thrift.Type.STRUCT, this.rows.length);
    for (var iter23 in this.rows)
    {
      if (this.rows.hasOwnProperty(iter23))
      {
        iter23 = this.rows[iter23];
        iter23.write(output);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

TQueryResult = function(args) {
  this.row_set = null;
  this.execution_time_ms = null;
  if (args) {
    if (args.row_set !== undefined) {
      this.row_set = args.row_set;
    }
    if (args.execution_time_ms !== undefined) {
      this.execution_time_ms = args.execution_time_ms;
    }
  }
};
TQueryResult.prototype = {};
TQueryResult.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.row_set = new TRowSet();
        this.row_set.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.I64) {
        this.execution_time_ms = input.readI64().value;
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

TQueryResult.prototype.write = function(output) {
  output.writeStructBegin('TQueryResult');
  if (this.row_set !== null && this.row_set !== undefined) {
    output.writeFieldBegin('row_set', Thrift.Type.STRUCT, 1);
    this.row_set.write(output);
    output.writeFieldEnd();
  }
  if (this.execution_time_ms !== null && this.execution_time_ms !== undefined) {
    output.writeFieldBegin('execution_time_ms', Thrift.Type.I64, 2);
    output.writeI64(this.execution_time_ms);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

TDBInfo = function(args) {
  this.db_name = null;
  this.db_owner = null;
  if (args) {
    if (args.db_name !== undefined) {
      this.db_name = args.db_name;
    }
    if (args.db_owner !== undefined) {
      this.db_owner = args.db_owner;
    }
  }
};
TDBInfo.prototype = {};
TDBInfo.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.db_name = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.db_owner = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

TDBInfo.prototype.write = function(output) {
  output.writeStructBegin('TDBInfo');
  if (this.db_name !== null && this.db_name !== undefined) {
    output.writeFieldBegin('db_name', Thrift.Type.STRING, 1);
    output.writeString(this.db_name);
    output.writeFieldEnd();
  }
  if (this.db_owner !== null && this.db_owner !== undefined) {
    output.writeFieldBegin('db_owner', Thrift.Type.STRING, 2);
    output.writeString(this.db_owner);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

TMapDException = function(args) {
  this.error_msg = null;
  if (args) {
    if (args.error_msg !== undefined) {
      this.error_msg = args.error_msg;
    }
  }
};
Thrift.inherits(TMapDException, Thrift.TException);
TMapDException.prototype.name = 'TMapDException';
TMapDException.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.error_msg = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

TMapDException.prototype.write = function(output) {
  output.writeStructBegin('TMapDException');
  if (this.error_msg !== null && this.error_msg !== undefined) {
    output.writeFieldBegin('error_msg', Thrift.Type.STRING, 1);
    output.writeString(this.error_msg);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

ThriftException = function(args) {
  this.error_msg = null;
  if (args) {
    if (args.error_msg !== undefined) {
      this.error_msg = args.error_msg;
    }
  }
};
Thrift.inherits(ThriftException, Thrift.TException);
ThriftException.prototype.name = 'ThriftException';
ThriftException.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.error_msg = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

ThriftException.prototype.write = function(output) {
  output.writeStructBegin('ThriftException');
  if (this.error_msg !== null && this.error_msg !== undefined) {
    output.writeFieldBegin('error_msg', Thrift.Type.STRING, 1);
    output.writeString(this.error_msg);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};
