javascript
es un lenguaje de programacion ligero, interpretado con funcuones de primera clase

si bien es mas conocido como el lenguaje de scripting para paguinas web muchos entornos fuera del navegador tambien lo usan (node.js, apache couchDB)
es un lenguaje basado en protocipos, con recoleccion de basura, dinamico, que soporta multiples paradigmas como imperativo funcional y orientado a objetos.
las capacidades dinamicas de javascripot incluyen construccion de objetos en tiempo de ejecucion, listas de parametros variables, variables de funcion, cracion dinamica de scripts( mediante eval: eval() evalua un codigo representado como una cadena de caracteres, sinreferencia a un objeto particular)
instrospeccion de objetos(meidante for..in(itera sobre todas las propiedade enumerables de un objeto que esta codificado por simbolos, incluyendo propiedades enumerables heredadas) y utilidade de Object(representa uno de los tipos de datos .es usado para guardad una coleccion de datos definidos y entidades mas complejas)) y recuperacion de codigo fuente y pueden recuperarse mediante toString().

javascript esta inflienciado sobre todo por la sintaxis de java c y c++

distingue entre mayusculas y minuscilas (es case-sensitive)  y utiliza el conjunto de caracteres unicode

en javascript, las instrucciones se denominan declaraciones y estan separadas por(;)

no es necesario el punto y como pero se considera buena practica

se escanea de izquierda a derecha y se convierte en una secuencia de elementos de entrada que son fragmentos, caracteres de control, terminadores de linea, comentarios o espacion en blanco

COMENTARIOS

la sintaxis de los comentarios en la misma que en c++ y en muchos otros lenguajes

// comentario de una linea


/* este
es 
para comentarios mas largos
o varias lineas
*/

DECLARACIONES

java script tiene 3 tipos de declaraciones de variables

var.- declara una variable, opcionalmente la inicia un valor

let.- declara una variable local con ambito de bloque, opcionalmente inicia a un valor

const.- declara un nombre de constante de solo lectura y ambito de bloque

nota: para entender mejor var y let, var tiene mas añcanze porque puede utilizarse en lugares diferentes del boque como una variable global  y let es solo local, refiriendose que si se realiza dentro de un bloque de codigo ya sea un if o otro tipo de bloque solo se podra utilizar en ese bloque

var  permite declarar la misma variable varias veces, let no permite redeclarar la misma variable en el mismo bloque

ambas permiten cambiar el valor

let se usa cuando el valor cambiara

const cuando el valor no cambiara

var practicamente no se usa en codigo moderno


VARIABLES

se pueden utilizar nombres simbolicos, estos se le conoce como identificadores.

un identificador  debe comenzar con una letra, un guion bajo o un signo de dolar

nota: se debe recordad que se distingue mayusculas y minusculas

se puede declarar variables globales no declaradas pero no es aconsejable ya que pueden provocar un comportamiento inesparado

AMBITO DE VARIABLES

cuando declaras una variable fuera de cualquier funcion, se denomina variable global, porque esta disponible para cualquier otro codigo en el documento actual.

cuando declaras una variable dentro de una funcion se llama variable local, porque solo esta disponible dentro de esa funcion.

elevacion de funcion

en el caso de var si se utiliza la variable antes de darle un valor javascriot le dara un valon indefinido (undefined)

VARIABLES GLOBALES

estas son propiedad del objeto global.

en pag web el objeto global es window, por lo que puedes establecer y acceder a variables globales utilizando la sintaxis window.variable

en consecuencia puedes acceder a las variables globales declaradas en una ventana o marco desde otra ventana o marco

CONSTANTES

la sintaxis de un identificador de constante es la misma que la de cualquier identificador de variable

ejemplo "" const pi=3.14;

una constante no puede cambiar el valor atraves de la asignacion o volver a declararla mientras se ejecuta el script

no se puede declarar una constante con el mismo nombre que una funcion o una variable en el mismo ambito.

TIPOS DE DATOS

Se definen siete tipos de datos que son primitivos.
1.- booleano true y false(verdadero y falso)

2.-null valor nulo 

3.- undefined propiedad de alto valor cuyo valor no esta definido

4.- number numero entero o un numero con una como flotante. ejemplo 43 o 3.14

5.- bigint un numero entero con precision arbitraria. ejemplo 900719925470992n

6.- String una secuencia de caracteres que presentan un valor de texto. por ejemplo "hola"

7 .- symbol tipo de dato cuyas instancias son unicas e inmutables

OBJECT

aunque estos tipos de datos son una cantidad relativqamente pequeña, permite realizar funciones utiles con tus aplicaciones. los otros elementos fundamentales en el lenguaje son los objetos y las funcions.Se puede pensar en objetos como contenedores con nombre para los valores, y las funciones como procedimientos que puedes programar en tu aplicacion.

CONVERSION DE TIPOS DE DATOS.

JavaScript es un lenguaje tipado dinamicamente. esto significa que no tienes que especificar el tipo de dato de una variable cuando la declaras. tambuen significa que los tipo s de datos se convierten automaticamente segun sea necesario durante la ejecucion del script

ejemplo

var answer=42;

answer= "gracias por todo el pescado";

Debido a que javascrip tipifica dinamicamente, esta asignacion no genera un mensaje de error

NUMEROS Y EL OPERADOR '+'

En expreciones que involucran valores numerico y de cadena con el operacor ´+´ , javascript comvierte los valores numericos en cadenas. por ejemplo, la consideran las af declaraciondx.

convertir texto a numeros

en el caso que un valor representado un numero en memodia como hat texto,  gay metodos para la conversacions

parseInt();

parseFloat();

parseint.-

parseIntI(String, base);


cadena Una cadena que representa el valor que se decea convertir

base.- un entero                                                                        parseint es una funcion de alto nivel y no esta aciociado a ningun objeto

si parse int encuentra un caracter que no es un numeral de la base especifica, lo ignora a el y a todos los caracteres 

si no se especifica la base o se especifica como 0, java asume lo sig

- si el parametro cadena comienza por 0x la base es 16 (hexadecimal)

s-i en el  parametro encuentra cadenas pomencara por "0" la base es esta caracteristica esta desaconsejado

-si el parametro cadena comienen por cualquiere otro valors, la base es 10 [decila[]]

si no se puede convertir regresa NaN

parsefloat().-

analiza un argumento (si es necesario, lo convierte en una cadena) y devuelve un numero de coma flotante.

hot termine dia 1 y aprendi git y github

