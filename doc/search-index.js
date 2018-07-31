var N = null;var searchIndex = {};
searchIndex["app"]={"doc":"","items":[],"paths":[]};
searchIndex["backend"]={"doc":"","items":[],"paths":[]};
searchIndex["webapp"]={"doc":"The main library interface","items":[[0,"config","webapp","Configuration related structures",N,N],[3,"Config","webapp::config","The global configuration",N,N],[12,"server","","The server configuration",0,N],[12,"log","","The logger configuration",0,N],[12,"postgres","","The database configuration",0,N],[12,"api","","The API configuration",0,N],[3,"ServerConfig","","The server configuration",N,N],[12,"ip","","The server IP address",1,N],[12,"port","","The server port",1,N],[12,"tls","","True if the server should use a TLS connection",1,N],[12,"cert","","The server certificate",1,N],[12,"key","","The server key",1,N],[12,"redirect_http_from","","The redirecting plain HTTP URLs to the servers target IP",1,N],[3,"LogConfig","","The logger configuration",N,N],[12,"actix_web","","The logging level of actix-web",2,N],[12,"webapp","","The logging level of the application",2,N],[3,"PostgresConfig","","The database configuration",N,N],[12,"host","","The full host to the database",3,N],[12,"username","","The username for the database",3,N],[12,"password","","The password for the database",3,N],[12,"database","","The database to be used",3,N],[3,"ApiConfig","","The API configuration",N,N],[12,"login_credentials","","The credentials based login API",4,N],[12,"login_session","","The session based login API",4,N],[12,"logout","","The logout API",4,N],[11,"clone","","",0,[[["self"]],["config"]]],[11,"clone","","",1,[[["self"]],["serverconfig"]]],[11,"clone","","",2,[[["self"]],["logconfig"]]],[11,"clone","","",3,[[["self"]],["postgresconfig"]]],[11,"clone","","",4,[[["self"]],["apiconfig"]]],[0,"protocol","webapp","The main protocol handling",N,N],[0,"model","webapp::protocol","Basic models",N,N],[3,"Session","webapp::protocol::model","A session representation",N,N],[12,"token","","The actual session token",5,N],[11,"values","","",5,N],[11,"build","","",5,N],[11,"fmt","","",5,[[["self"],["formatter"]],["result"]]],[11,"eq","","",5,[[["self"],["session"]],["bool"]]],[11,"ne","","",5,[[["self"],["session"]],["bool"]]],[0,"request","webapp::protocol","Request messages",N,N],[3,"LoginCredentials","webapp::protocol::request","The credentials based login request",N,N],[12,"username","","The username",6,N],[12,"password","","The password",6,N],[3,"LoginSession","","The session based login request",N,N],[12,"0","","",7,N],[3,"Logout","","The logout request",N,N],[12,"0","","",8,N],[11,"fmt","","",6,[[["self"],["formatter"]],["result"]]],[11,"eq","","",6,[[["self"],["logincredentials"]],["bool"]]],[11,"ne","","",6,[[["self"],["logincredentials"]],["bool"]]],[11,"fmt","","",7,[[["self"],["formatter"]],["result"]]],[11,"eq","","",7,[[["self"],["loginsession"]],["bool"]]],[11,"ne","","",7,[[["self"],["loginsession"]],["bool"]]],[11,"fmt","","",8,[[["self"],["formatter"]],["result"]]],[11,"eq","","",8,[[["self"],["logout"]],["bool"]]],[11,"ne","","",8,[[["self"],["logout"]],["bool"]]],[0,"response","webapp::protocol","Response specific implementations",N,N],[3,"Login","webapp::protocol::response","The login response",N,N],[12,"0","","",9,N],[3,"Logout","","The logout response",N,N],[11,"fmt","","",9,[[["self"],["formatter"]],["result"]]],[11,"eq","","",9,[[["self"],["login"]],["bool"]]],[11,"ne","","",9,[[["self"],["login"]],["bool"]]],[11,"fmt","","",10,[[["self"],["formatter"]],["result"]]],[11,"eq","","",10,[[["self"],["logout"]],["bool"]]],[0,"schema","webapp","",N,N],[0,"sessions","webapp::schema","Representation of the `sessions` table.",N,N],[3,"table","webapp::schema::sessions","The actual table struct",N,N],[0,"dsl","","Re-exports all of the columns of this table, as well as the table struct renamed to the module name. This is meant to be glob imported for functions which only deal with one table.",N,N],[0,"columns","","Contains all of the columns of this table",N,N],[3,"star","webapp::schema::sessions::columns","Represents `table_name.*`, which is sometimes needed for efficient count queries. It cannot be used in place of `all_columns`, and has a `SqlType` of `()` to prevent it being used that way",N,N],[3,"token","","The `token` column of the `sessions` table.",N,N],[11,"fmt","","",11,[[["self"],["formatter"]],["result"]]],[11,"clone","","",11,[[["self"]],["star"]]],[11,"walk_ast","","",11,[[["self"],["astpass"]],["queryresult"]]],[11,"fmt","","",12,[[["self"],["formatter"]],["result"]]],[11,"clone","","",12,[[["self"]],["token"]]],[11,"default","","",12,[[],["token"]]],[11,"walk_ast","","",12,[[["self"],["astpass"]],["queryresult"]]],[11,"eq_all","","",12,N],[6,"SqlType","webapp::schema::sessions","The SQL type of all of the columns on this table",N,N],[6,"BoxedQuery","","Helper type for representing a boxed query from this table",N,N],[17,"all_columns","","A tuple of all of the columns on this table",N,N],[11,"fmt","","",13,[[["self"],["formatter"]],["result"]]],[11,"clone","","",13,[[["self"]],["table"]]],[11,"star","","Represents `table_name.*`, which is sometimes necessary for efficient count queries. It cannot be used in place of `all_columns`",13,[[["self"]],["star"]]],[11,"from_clause","","",13,N],[11,"default_selection","","",13,N],[11,"as_query","","",13,N],[11,"primary_key","","",13,N],[11,"all_columns","","",13,N],[11,"table","","",13,N],[11,"into_update_target","","",13,[[["self"]],["updatetarget"]]],[11,"join_target","","",13,N],[11,"join_target","","",13,N],[11,"join_target","","",13,N],[11,"join_target","","",13,N],[11,"values","","",13,N],[17,"CONFIG_FILENAME","webapp","The global config file name",N,N],[11,"to_owned","webapp::config","",0,[[["self"]],["t"]]],[11,"clone_into","","",0,N],[11,"from","","",0,[[["t"]],["t"]]],[11,"into","","",0,[[["self"]],["u"]]],[11,"try_from","","",0,[[["u"]],["result"]]],[11,"borrow","","",0,[[["self"]],["t"]]],[11,"try_into","","",0,[[["self"]],["result"]]],[11,"borrow_mut","","",0,[[["self"]],["t"]]],[11,"get_type_id","","",0,[[["self"]],["typeid"]]],[11,"to_owned","","",1,[[["self"]],["t"]]],[11,"clone_into","","",1,N],[11,"from","","",1,[[["t"]],["t"]]],[11,"into","","",1,[[["self"]],["u"]]],[11,"try_from","","",1,[[["u"]],["result"]]],[11,"borrow","","",1,[[["self"]],["t"]]],[11,"try_into","","",1,[[["self"]],["result"]]],[11,"borrow_mut","","",1,[[["self"]],["t"]]],[11,"get_type_id","","",1,[[["self"]],["typeid"]]],[11,"to_owned","","",2,[[["self"]],["t"]]],[11,"clone_into","","",2,N],[11,"from","","",2,[[["t"]],["t"]]],[11,"into","","",2,[[["self"]],["u"]]],[11,"try_from","","",2,[[["u"]],["result"]]],[11,"borrow","","",2,[[["self"]],["t"]]],[11,"try_into","","",2,[[["self"]],["result"]]],[11,"borrow_mut","","",2,[[["self"]],["t"]]],[11,"get_type_id","","",2,[[["self"]],["typeid"]]],[11,"to_owned","","",3,[[["self"]],["t"]]],[11,"clone_into","","",3,N],[11,"from","","",3,[[["t"]],["t"]]],[11,"into","","",3,[[["self"]],["u"]]],[11,"try_from","","",3,[[["u"]],["result"]]],[11,"borrow","","",3,[[["self"]],["t"]]],[11,"try_into","","",3,[[["self"]],["result"]]],[11,"borrow_mut","","",3,[[["self"]],["t"]]],[11,"get_type_id","","",3,[[["self"]],["typeid"]]],[11,"to_owned","","",4,[[["self"]],["t"]]],[11,"clone_into","","",4,N],[11,"from","","",4,[[["t"]],["t"]]],[11,"into","","",4,[[["self"]],["u"]]],[11,"try_from","","",4,[[["u"]],["result"]]],[11,"borrow","","",4,[[["self"]],["t"]]],[11,"try_into","","",4,[[["self"]],["result"]]],[11,"borrow_mut","","",4,[[["self"]],["t"]]],[11,"get_type_id","","",4,[[["self"]],["typeid"]]],[11,"from","webapp::protocol::model","",5,[[["t"]],["t"]]],[11,"into","","",5,[[["self"]],["u"]]],[11,"try_from","","",5,[[["u"]],["result"]]],[11,"borrow","","",5,[[["self"]],["t"]]],[11,"try_into","","",5,[[["self"]],["result"]]],[11,"borrow_mut","","",5,[[["self"]],["t"]]],[11,"get_type_id","","",5,[[["self"]],["typeid"]]],[11,"from","webapp::protocol::request","",6,[[["t"]],["t"]]],[11,"into","","",6,[[["self"]],["u"]]],[11,"try_from","","",6,[[["u"]],["result"]]],[11,"borrow","","",6,[[["self"]],["t"]]],[11,"try_into","","",6,[[["self"]],["result"]]],[11,"borrow_mut","","",6,[[["self"]],["t"]]],[11,"get_type_id","","",6,[[["self"]],["typeid"]]],[11,"from","","",7,[[["t"]],["t"]]],[11,"into","","",7,[[["self"]],["u"]]],[11,"try_from","","",7,[[["u"]],["result"]]],[11,"borrow","","",7,[[["self"]],["t"]]],[11,"try_into","","",7,[[["self"]],["result"]]],[11,"borrow_mut","","",7,[[["self"]],["t"]]],[11,"get_type_id","","",7,[[["self"]],["typeid"]]],[11,"from","","",8,[[["t"]],["t"]]],[11,"into","","",8,[[["self"]],["u"]]],[11,"try_from","","",8,[[["u"]],["result"]]],[11,"borrow","","",8,[[["self"]],["t"]]],[11,"try_into","","",8,[[["self"]],["result"]]],[11,"borrow_mut","","",8,[[["self"]],["t"]]],[11,"get_type_id","","",8,[[["self"]],["typeid"]]],[11,"from","webapp::protocol::response","",9,[[["t"]],["t"]]],[11,"into","","",9,[[["self"]],["u"]]],[11,"try_from","","",9,[[["u"]],["result"]]],[11,"borrow","","",9,[[["self"]],["t"]]],[11,"try_into","","",9,[[["self"]],["result"]]],[11,"borrow_mut","","",9,[[["self"]],["t"]]],[11,"get_type_id","","",9,[[["self"]],["typeid"]]],[11,"from","","",10,[[["t"]],["t"]]],[11,"into","","",10,[[["self"]],["u"]]],[11,"try_from","","",10,[[["u"]],["result"]]],[11,"borrow","","",10,[[["self"]],["t"]]],[11,"try_into","","",10,[[["self"]],["result"]]],[11,"borrow_mut","","",10,[[["self"]],["t"]]],[11,"get_type_id","","",10,[[["self"]],["typeid"]]],[11,"to_owned","webapp::schema::sessions","",13,[[["self"]],["t"]]],[11,"clone_into","","",13,N],[11,"from","","",13,[[["t"]],["t"]]],[11,"into","","",13,[[["self"]],["u"]]],[11,"try_from","","",13,[[["u"]],["result"]]],[11,"borrow","","",13,[[["self"]],["t"]]],[11,"try_into","","",13,[[["self"]],["result"]]],[11,"borrow_mut","","",13,[[["self"]],["t"]]],[11,"get_type_id","","",13,[[["self"]],["typeid"]]],[11,"group_by","","",13,N],[11,"join_target","","",13,N],[11,"to_owned","webapp::schema::sessions::columns","",11,[[["self"]],["t"]]],[11,"clone_into","","",11,N],[11,"from","","",11,[[["t"]],["t"]]],[11,"into","","",11,[[["self"]],["u"]]],[11,"try_from","","",11,[[["u"]],["result"]]],[11,"borrow","","",11,[[["self"]],["t"]]],[11,"try_into","","",11,[[["self"]],["result"]]],[11,"borrow_mut","","",11,[[["self"]],["t"]]],[11,"get_type_id","","",11,[[["self"]],["typeid"]]],[11,"to_owned","","",12,[[["self"]],["t"]]],[11,"clone_into","","",12,N],[11,"from","","",12,[[["t"]],["t"]]],[11,"into","","",12,[[["self"]],["u"]]],[11,"try_from","","",12,[[["u"]],["result"]]],[11,"borrow","","",12,[[["self"]],["t"]]],[11,"try_into","","",12,[[["self"]],["result"]]],[11,"borrow_mut","","",12,[[["self"]],["t"]]],[11,"get_type_id","","",12,[[["self"]],["typeid"]]]],"paths":[[3,"Config"],[3,"ServerConfig"],[3,"LogConfig"],[3,"PostgresConfig"],[3,"ApiConfig"],[3,"Session"],[3,"LoginCredentials"],[3,"LoginSession"],[3,"Logout"],[3,"Login"],[3,"Logout"],[3,"star"],[3,"token"],[3,"table"]]};
searchIndex["webapp_backend"]={"doc":"The main library interface","items":[[3,"Server","webapp_backend","The server instance",N,N],[11,"new","","Create a new server instance",0,[[["config"]],["result",["error"]]]],[11,"start","","Start the server",0,[[["self"]],["i32"]]]],"paths":[[3,"Server"]]};
searchIndex["webapp_frontend"]={"doc":"The main library interface","items":[[3,"RootComponent","webapp_frontend","Data Model for the Root Component",N,N],[5,"init_logger","","Initialize the static logger",N,[[],["result",["error"]]]],[11,"create","","",0,N],[11,"change","","",0,N],[11,"update","","",0,N],[11,"view","","",0,[[["self"]],["html"]]]],"paths":[[3,"RootComponent"]]};
initSearch(searchIndex);
