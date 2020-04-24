CREATE FUNCTION "dba"."getPath"()
returns long varchar
deterministic
BEGIN
declare dbPath long varchar; // chemin de la db
declare dbName long varchar; // nom de la db
--
set dbPath = (SELECT db_property ('file'));
set dbName = (SELECT db_property('name')) + '.db';
set dbPath = left(dbPath, length(dbPath)-length(dbName));
--
return dbPath; // renvoyer path
END


CREATE PROCEDURE "dba"."http_getPage"(in url char(255))
RESULT(html long varchar)
BEGIN
    call sa_set_http_header( 'Content-Type', 'text/html' );
    select xp_read_file(dba.getPath() ||url|| '.html');
END



CREATE PROCEDURE "dba"."http_getCSS"(in url char(255))
RESULT(css long varchar)
BEGIN
call sa_set_http_header( 'Content-Type', 'text/css'); // header http
select xp_read_file(dba.getPath() || 'CSS\' || url); // renvoyer css
END



CREATE PROCEDURE "dba"."http_getJS"(in url char(255))
RESULT(js long varchar)
BEGIN
call sa_set_http_header( 'Content-Type', 'text/javascript'); // header
select xp_read_file(dba.getPath() || 'JS\' || url); // renvoyer js
END


CREATE PROCEDURE "dba"."http_getIMG"( in url char(255) )
result( img long binary ) dynamic result sets 1
begin
 --
 declare extension long varchar;
 set extension = substr(url,CHARINDEX('.',url)+1);
 if extension = 'jpg' then set extension = 'jpeg' end if;
 call sa_set_http_header('Content-Type','image/' || extension);
 select xp_read_file(dba.getPath() || 'IMG\\' || url) 
--
end



CREATE PROCEDURE "dba"."http_getVideo"(in url char(255))
result(html long varchar)
BEGIN
    call sa_set_http_header( 'Content-Type', 'text/html' );
    select xp_read_file(dba.getPath()||'video\' ||url);
END

--------------------------------------------------------------------------------------------------------------------------------------
