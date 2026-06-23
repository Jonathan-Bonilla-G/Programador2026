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

TIPO