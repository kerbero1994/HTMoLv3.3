 //función para imprimir el valor por medio de triángulos
 var indxOffset=0; //es para el offset que me genere cáda dígito --------------------------------------hacerlo global

 function NumDistance(atm1, atm2)
 {

    var xx1=atm2.X;
    var xx2=atm1.X;

    var yy1=atm2.Y;
    var yy2=atm1.Y;

    var zz1=atm2.Z;
    var zz2=atm1.Z;

    var dist = Math.sqrt(   Math.pow( xx1 - xx2 , 2) + Math.pow( yy1 - yy2, 2) + Math.pow( zz1 - zz2, 2) );

    if(dist>0)  /////NaN
    {
        dist=Number((dist).toFixed(3));

        var distStr= dist.toString();
        //alert(distStr);
        //alert( distStr.length );

        //calcular la posición donde va a ir el número flotante
        var xx3=0;
        var yy3=0;
        var zz3=0;

        if (xx2 > xx1) 
        {
            xx3 = ((xx2 - xx1) / 2 ) +xx1;
        }
        else
        {
            xx3 = ((xx1 - xx2) / 2 ) +xx2;
        }
        if (yy2 > yy1) 
        {
            yy3 = ((yy2 - yy1) / 2 ) +yy1;
        }
        else
        {
            yy3 = ((yy1 - yy2) / 2 ) +yy2;
        }
        if (zz2 > zz1) 
        {
            zz3 = ((zz2 - zz1) / 2 ) +zz1;
        }
        else
        {
            zz3 = ((zz1 - zz2) / 2 ) +zz2;
        }

        //le sumo el offset de toda la molécula
        xx3=xx3 - Cx - 0.4;
        yy3=yy3 - Cy + 0.2;
        zz3=zz3 - Cz;

        DrawNumber(distStr, xx3, yy3, zz3, false);


    }

    
 }


function NumAngle(atm1, atm2, atm3)
{
    var xx1=atm1.X;
    var xx2=atm2.X;
    var xx3=atm3.X;

    var yy1=atm1.Y;
    var yy2=atm2.Y;
    var yy3=atm3.Y;

    var zz1=atm1.Z;
    var zz2=atm2.Z;
    var zz3=atm3.Z;

    var v1 = [ xx2-xx1, yy2-yy1, zz2-zz1 ];
    var v2 = [ xx2-xx3, yy2-yy3, zz2-zz3 ];

    //alert("xx1:" + xx1 + " yy1:" + yy1 + " zz1:" + zz1);
    //alert("xx2:" + xx2 + " yy2:" + yy2 + " zz2:" + zz2);
    //alert("xx3:" + xx3 + " yy3:" + yy3 + " zz3:" + zz3);
    //alert("v1[0]:" + v1[0] + " v1[1]:" + v1[1] + " v1[2]:" + v1[2]);
    //alert("v2[0]:" + v2[0] + " v2[1]:" + v2[1] + " v2[2]:" + v2[2]);

    var tmp =( (v1[0] * v2[0])  +  (v1[1] * v2[1])  +  (v1[2] * v2[2]) )  /  ( Math.sqrt(Math.pow(v1[0], 2) + Math.pow(v1[1], 2) + Math.pow(v1[2], 2))  *  Math.sqrt(Math.pow(v2[0], 2) + Math.pow(v2[1], 2) + Math.pow(v2[2], 2)) )

    var angulo=(180*Math.acos(tmp))/Math.PI;       
         
    //alert(angulo.toFixed(2));
    angulo = angulo.toFixed(2);

    if (angulo>0) 
    {
        var xx4= xx2 - Cx + 0.4; //con un offset en x
        var yy4= yy2 - Cy - 0.2;
        var zz4= zz2 - Cz;

        var angleStr= angulo.toString();

        DrawNumber(angleStr, xx4, yy4, zz4, true);


    }

}

function DrawNumber(Num, xx3, yy3, zz3, AngleBool)
{

    var numElementos=0;
        
        
        for(var i=0; i<Num.length; i++)
        {
            if (Num[i]==1) 
            {
                //agrego el dígito 1
                numElementos=diPos1.length; //es el número de vértices

                for(var j=0; j<numElementos;)
                {
                    diPosition.push( diPos1[j]   + xx3 ); //es el x
                    diPosition.push( diPos1[j+1] + yy3 ); //es el y
                    diPosition.push( diPos1[j+2] + zz3 ); //es el z

                    j=j+3;
                }

                //le doy el offset para que el siguiente número se imprima un poco más en x
                xx3 = xx3 + 0.14;

                //agrego los índices
                for(var j=0; j< diInd1.length; j++)
                {
                    diIndex.push( diInd1[j] + indxOffset );
                }
                indxOffset=indxOffset+4;            

            }
            else if(Num[i]==2)
            {
                //agrego el dígito 2
                numElementos=diPos2.length; //es el número de vértices

                for(var j=0; j<numElementos;)
                {
                    diPosition.push( diPos2[j]   + xx3 ); //es el x
                    diPosition.push( diPos2[j+1] + yy3 ); //es el y
                    diPosition.push( diPos2[j+2] + zz3 ); //es el z

                    j=j+3;
                }

                //le doy el offset para que el siguiente número se imprima un poco más en x
                xx3 = xx3 + 0.14;

                //agrego los índices
                for(var j=0; j< diInd2.length; j++)
                {
                    diIndex.push( diInd2[j] + indxOffset );
                }
                indxOffset=indxOffset+19;   

            }
            else if(Num[i]==3)
            {

                //agrego el dígito 3
                numElementos=diPos3.length; //es el número de vértices

                for(var j=0; j<numElementos;)
                {
                    diPosition.push( diPos3[j]   + xx3 ); //es el x
                    diPosition.push( diPos3[j+1] + yy3 ); //es el y
                    diPosition.push( diPos3[j+2] + zz3 ); //es el z

                    j=j+3;
                }

                //le doy el offset para que el siguiente número se imprima un poco más en x
                xx3 = xx3 + 0.14;

                //agrego los índices
                for(var j=0; j< diInd3.length; j++)
                {
                    diIndex.push( diInd3[j] + indxOffset );
                }
                indxOffset=indxOffset+27;         

            }
            else if(Num[i]==4)
            {
                //agrego el dígito 4
                numElementos=diPos4.length; //es el número de vértices

                for(var j=0; j<numElementos;)
                {
                    diPosition.push( diPos4[j]   + xx3 ); //es el x
                    diPosition.push( diPos4[j+1] + yy3 ); //es el y
                    diPosition.push( diPos4[j+2] + zz3 ); //es el z

                    j=j+3;
                }

                //le doy el offset para que el siguiente número se imprima un poco más en x
                xx3 = xx3 + 0.14;

                //agrego los índices
                for(var j=0; j< diInd4.length; j++)
                {
                    diIndex.push( diInd4[j] + indxOffset );
                }
                indxOffset=indxOffset+15;
            }
            else if(Num[i]==5)
            {
                //agrego el dígito 5
                numElementos=diPos5.length; //es el número de vértices

                for(var j=0; j<numElementos;)
                {
                    diPosition.push( diPos5[j]   + xx3 ); //es el x
                    diPosition.push( diPos5[j+1] + yy3 ); //es el y
                    diPosition.push( diPos5[j+2] + zz3 ); //es el z

                    j=j+3;
                }

                //le doy el offset para que el siguiente número se imprima un poco más en x
                xx3 = xx3 + 0.14;

                //agrego los índices
                for(var j=0; j< diInd5.length; j++)
                {
                    diIndex.push( diInd5[j] + indxOffset );
                }
                indxOffset=indxOffset+18;
                
            }
            else if(Num[i]==6)
            {
                 //agrego el dígito 6
                numElementos=diPos6.length; //es el número de vértices

                for(var j=0; j<numElementos;)
                {
                    diPosition.push( diPos6[j]   + xx3 ); //es el x
                    diPosition.push( diPos6[j+1] + yy3 ); //es el y
                    diPosition.push( diPos6[j+2] + zz3 ); //es el z

                    j=j+3;
                }

                //le doy el offset para que el siguiente número se imprima un poco más en x
                xx3 = xx3 + 0.14;

                //agrego los índices
                for(var j=0; j< diInd6.length; j++)
                {
                    diIndex.push( diInd6[j] + indxOffset );
                }
                indxOffset=indxOffset+21;
                
            }
            else if(Num[i]==7)
            {
                 //agrego el dígito 7
                numElementos=diPos7.length; //es el número de vértices

                for(var j=0; j<numElementos;)
                {
                    diPosition.push( diPos7[j]   + xx3 ); //es el x
                    diPosition.push( diPos7[j+1] + yy3 ); //es el y
                    diPosition.push( diPos7[j+2] + zz3 ); //es el z

                    j=j+3;
                }

                //le doy el offset para que el siguiente número se imprima un poco más en x
                xx3 = xx3 + 0.14;

                //agrego los índices
                for(var j=0; j< diInd7.length; j++)
                {
                    diIndex.push( diInd7[j] + indxOffset );
                }
                indxOffset=indxOffset+6;
                
            }
            else if(Num[i]==8)
            {
                 //agrego el dígito 8
                numElementos=diPos8.length; //es el número de vértices

                for(var j=0; j<numElementos;)
                {
                    diPosition.push( diPos8[j]   + xx3 ); //es el x
                    diPosition.push( diPos8[j+1] + yy3 ); //es el y
                    diPosition.push( diPos8[j+2] + zz3 ); //es el z

                    j=j+3;
                }

                //le doy el offset para que el siguiente número se imprima un poco más en x
                xx3 = xx3 + 0.14;

                //agrego los índices
                for(var j=0; j< diInd8.length; j++)
                {
                    diIndex.push( diInd8[j] + indxOffset );
                }
                indxOffset=indxOffset+32;
                
            }
            else if(Num[i]==9)
            {
                 //agrego el dígito 9
                numElementos=diPos9.length; //es el número de vértices

                for(var j=0; j<numElementos;)
                {
                    diPosition.push( diPos9[j]   + xx3 ); //es el x
                    diPosition.push( diPos9[j+1] + yy3 ); //es el y
                    diPosition.push( diPos9[j+2] + zz3 ); //es el z

                    j=j+3;
                }

                //le doy el offset para que el siguiente número se imprima un poco más en x
                xx3 = xx3 + 0.14;

                //agrego los índices
                for(var j=0; j< diInd9.length; j++)
                {
                    diIndex.push( diInd9[j] + indxOffset );
                }
                indxOffset=indxOffset+23;
                
            }
            else if(Num[i]==0)
            {
                 //agrego el dígito 0
                numElementos=diPos0.length; //es el número de vértices

                for(var j=0; j<numElementos;)
                {
                    diPosition.push( diPos0[j]   + xx3 ); //es el x
                    diPosition.push( diPos0[j+1] + yy3 ); //es el y
                    diPosition.push( diPos0[j+2] + zz3 ); //es el z

                    j=j+3;
                }

                //le doy el offset para que el siguiente número se imprima un poco más en x
                xx3 = xx3 + 0.14;

                //agrego los índices
                for(var j=0; j< diInd0.length; j++)
                {
                    diIndex.push( diInd0[j] + indxOffset );
                }
                indxOffset=indxOffset+ 16;
                
            }
            else //sería el punto
            {
                //agrego el dígito .
                numElementos=diPunto.length; //es el número de vértices

                for(var j=0; j<numElementos;)
                {
                    diPosition.push( diPunto[j]   + xx3 ); //es el x
                    diPosition.push( diPunto[j+1] + yy3 ); //es el y
                    diPosition.push( diPunto[j+2] + zz3 ); //es el z

                    j=j+3;
                }

                //le doy el offset para que el siguiente número se imprima un poco más en x
                xx3 = xx3 + 0.14;

                //agrego los índices
                for(var j=0; j< diIndPunto.length; j++)
                {
                    diIndex.push( diIndPunto[j] + indxOffset );
                }
                indxOffset=indxOffset+ 8;            
            }

            for(j=0; j<numElementos; )
            {
                //para agregar el color
                diColor.push(0);
                diColor.push(1);
                diColor.push(0);
                diColor.push(1);

                diColorDif.push(0);
                diColorDif.push(0);
                diColorDif.push(0);
                diColorDif.push(0);

                diNormal.push(1);
                diNormal.push(1);
                diNormal.push(1);

                chaIndex.push(1.5);
                chaIndex.push(1.5);

                j=j+3;
            }
        }

        if (AngleBool) 
        {
            //al final agrego el grado
        //agrego el dígito grado
                numElementos=diGrado.length; //es el número de vértices

                for(var j=0; j<numElementos;)
                {
                    diPosition.push( diGrado[j]   + xx3 ); //es el x
                    diPosition.push( diGrado[j+1] + yy3 ); //es el y
                    diPosition.push( diGrado[j+2] + zz3 ); //es el z

                    j=j+3;
                }

                //le doy el offset para que el siguiente número se imprima un poco más en x
                xx3 = xx3 + 0.14;

                //agrego los índices
                for(var j=0; j< diIndGrado.length; j++)
                {
                    diIndex.push( diIndGrado[j] + indxOffset );
                }
                indxOffset=indxOffset+ 16;            
            

            for(j=0; j<numElementos; )
            {
                //para agregar el color
                diColor.push(0);
                diColor.push(1);
                diColor.push(0);
                diColor.push(1);

                diColorDif.push(0);
                diColorDif.push(0);
                diColorDif.push(0);
                diColorDif.push(0);

                diNormal.push(1);
                diNormal.push(1);
                diNormal.push(1);

                chaIndex.push(1.5);
                chaIndex.push(1.5);

                j=j+3;
            }


        }
        else
        {
            //al final agrego el nm
        //agrego el dígito nm
                xx3 = xx3 + 0.1;
                numElementos=diNM.length; //es el número de vértices

                for(var j=0; j<numElementos;)
                {
                    diPosition.push( diNM[j]   + xx3 ); //es el x
                    diPosition.push( diNM[j+1] + yy3 ); //es el y
                    diPosition.push( diNM[j+2] + zz3 ); //es el z

                    j=j+3;
                }

                //le doy el offset para que el siguiente número se imprima un poco más en x
                xx3 = xx3 + 0.14;

                //agrego los índices
                for(var j=0; j< diIndNM.length; j++)
                {
                    diIndex.push( diIndNM[j] + indxOffset );
                }
                indxOffset=indxOffset+ 44;            
            

            for(j=0; j<numElementos; )
            {
                //para agregar el color
                diColor.push(0);
                diColor.push(1);
                diColor.push(0);
                diColor.push(1);

                diColorDif.push(0);
                diColorDif.push(0);
                diColorDif.push(0);
                diColorDif.push(0);

                diNormal.push(1);
                diNormal.push(1);
                diNormal.push(1);

                chaIndex.push(1.5);
                chaIndex.push(1.5);

                j=j+3;
            }


        }

        

       initBufDigit();

}

 /////////////////////////////////////////// PARA DIGITOS ///////////////////////////////////////////
    var diPosition = [];
    var diColor = [];
    var diNormal = [];
    var diIndex = [];
    var chaIndex = [];
    var diColorDif = [];

    var diPosBuffer = [];
    var diColorBuffer = [];
    var diNorBuffer = [];
    var diIndexBuffer = [];
    var chaIndexBuffer = [];
    var diColorBufferDif = [];

//dígito 0
var diPos0 = [
-0.031900,0.118950,0.000000,  //son 16 vértices
0.000000,0.119600,0.000000,
0.000000,0.138200,0.000000,
0.031900,0.118950,0.000000,
-0.017900,0.105900,0.000000,
0.017900,0.105900,0.000000,
-0.044000,0.068200,0.000000,
0.044000,0.068200,0.000000,
-0.024400,0.068200,0.000000,
0.024400,0.068200,0.000000,
-0.031900,0.017450,0.000000,
-0.017900,0.030500,0.000000,
0.017900,0.030500,0.000000,
0.031900,0.017450,0.000000,
0.000000,0.016800,0.000000,
0.000000,-0.001800,0.000000
];

var diInd0 = [
    0, 1, 2, 1, 3, 2, 0, 4, 1, 5, 3, 1, 6, 4, 0, 5, 7, 3, 6, 8, 4, 9, 7, 5, 10, 8, 6, 10, 11, 8, 12, 7, 9, 12, 13, 7,
     10, 14, 11, 14, 13, 12, 15, 14, 10, 14, 15, 13

];

//dígito 1 
var diPos1 = [
-0.009600, 0.000000, 0.000000, 
0.010000, 0.136400, 0.000000,
-0.009600, 0.136400, 0.000000, 
0.010000, 0.000000, 0.000000
];

var diInd1 = [
    0, 1, 2, 0, 3, 1
];

 //dígito 2
    var diPos2 = [
-0.024300,0.135000,0.000000,   //son 19 vértices
0.021825,0.126350,0.000000,
-0.008200,0.138200,0.000000,
-0.040400,0.125200,0.000000,
-0.009600,0.119000,0.000000,
0.007125,0.111825,0.000000,
0.033400,0.095600,0.000000,
-0.040400,0.100600,0.000000,
-0.024550,0.115050,0.000000,
0.013800,0.093400,0.000000,
0.023600,0.062350,0.000000,
0.011400,0.078650,0.000000,
0.004200,0.064200,0.000000,
-0.018225,0.032200,0.000000,
-0.009000,0.018600,0.000000,
-0.043200,0.001400,0.000000,
0.043200,0.018600,0.000000,
0.043200,0.000000,0.000000,
-0.043200,0.000000,0.000000
    ];


    var diInd2 = [
            0, 1, 2, 3, 1, 0, 3, 4, 1, 4, 5, 1, 5, 6, 1, 7, 8, 3, 8, 4, 3, 9, 6, 5,
            9, 10, 6, 11, 10, 9, 12, 10, 11, 13, 10, 12, 13, 14, 10, 15, 14, 13, 15,
            16, 14, 15, 17, 16, 18, 17, 15
    ];   //offset de 19

var diPos3 = [
-0.021450,0.136800,0.000000,  //son 27 vértices
0.021650,0.128500,0.000000,
-0.007600,0.138200,0.000000,
-0.033800,0.132400,0.000000,
-0.033800,0.113800,0.000000,
-0.021450,0.118275,0.000000,
-0.010600,0.119600,0.000000,
0.006600,0.114125,0.000000,
0.032600,0.102600,0.000000,
0.013000,0.099200,0.000000,
0.028550,0.084150,0.000000,
0.006250,0.084650,0.000000,
-0.014000,0.079400,0.000000,
0.015200,0.072000,0.000000,
-0.014000,0.061400,0.000000,
0.030100,0.059475,0.000000,
0.007875,0.055400,0.000000,
0.034800,0.039600,0.000000,
0.015200,0.038600,0.000000,
0.022750,0.009750,0.000000,
0.009225,0.022750,0.000000,
-0.037200,0.006000,0.000000,
-0.021850,0.019375,0.000000,
-0.037200,0.027200,0.000000,
-0.006800,0.016800,0.000000,
-0.008200,-0.001800,0.000000,
-0.022550,0.000225,0.000000
];

    var diInd3 = [
        0, 1, 2, 3, 1, 0, 4, 5, 3, 5, 1, 3, 5, 6, 1, 6, 7, 1, 7, 8, 1, 9, 8, 7, 9,
        10, 8, 11, 10, 9, 12, 10, 11, 12, 13, 10, 14, 13, 12, 14, 15, 13, 16, 15, 14, 16, 17, 15, 18, 17, 16, 18, 19, 17, 20, 19, 18, 21, 
        22, 23, 24, 19, 20, 21, 24, 22, 21, 19, 24, 21, 25, 19, 26, 25, 21
    ];     //offset de 27

    ////digito 4
    var diPos4 = [
           -0.047800, 0.053800, 0.000000,  //son 15 vértices
            0.029600, 0.138200, 0.000000, 
            0.021200, 0.138200, 0.000000, 
            0.009600, 0.101200, 0.000000, 
            0.010000, 0.101200, 0.000000, 
            0.029600, 0.062400 ,0.000000, 
           -0.021600, 0.062400 ,0.000000, 
            0.010000, 0.062400, 0.000000, 
            0.044200, 0.062400, 0.000000, 
            0.044200, 0.044800, 0.000000, 
           -0.047800, 0.044800, 0.000000, 
            0.010000, 0.044800, 0.000000 ,
            0.010000, 0.000000, 0.000000, 
            0.029600, 0.044800, 0.000000, 
            0.029600, 0.000000, 0.000000
    ];
    var diInd4 = [
            0, 1, 2, 0, 3, 1, 3, 4, 1, 4, 5, 1, 0, 6, 3, 7, 5, 4, 0, 7, 6, 0, 5, 7, 0, 
            8, 5, 0, 9, 8, 10, 9, 0, 11, 9, 10, 12, 13, 11, 13, 9, 11, 12, 14, 13
    ];   //offset de 15

    ///digito 5
    var diPos5 = [
-0.029800,0.065400,0.000000,   //son 18 dígitos
-0.012000,0.118800,0.000000,
-0.029800,0.136400,0.000000,
0.030800,0.136400,0.000000,
0.030800,0.118800,0.000000,
-0.012000,0.084600,0.000000,
0.024350,0.073325,0.000000,
0.005350,0.062625,0.000000,
0.037600,0.041800,0.000000,
0.018000,0.041400,0.000000,
0.024975,0.010550,0.000000,
0.009675,0.024075,0.000000,
-0.040000,0.006600,0.000000,
-0.025175,0.019325,0.000000,
-0.040000,0.026800,0.000000,
-0.010200,0.016800,0.000000,
-0.007000,-0.001800,0.000000,
-0.023500,0.000150,0.000000
    ];

var diInd5 = [
    0, 1,2, 1, 3, 2, 1, 4, 3, 0, 5, 1, 0, 6, 5, 0, 7, 6, 7, 8, 6, 9, 8, 7, 9, 10, 8, 11, 10, 9, 12, 13,
    14, 15, 10, 11, 12, 15, 13, 12, 10, 15, 12, 16, 10, 17, 16, 12
]; 

        //digito 6
    var diPos6 = [
-0.027175,0.096375,0.000000,  //son 21
0.025200,0.123200,0.000000,
0.013400,0.138200,0.000000,
-0.000800,0.101125,0.000000,
-0.016600,0.073200,0.000000,
-0.041200,0.046600,0.000000,
-0.007250,0.077050,0.000000,
0.032075,0.067375,0.000000,
0.004800,0.078800,0.000000,
-0.009925,0.058700,0.000000,
0.000800,0.060200,0.000000,
0.016975,0.054200,0.000000,
0.043000,0.039000,0.000000,
-0.020800,0.053000,0.000000,
0.023400,0.039200,0.000000,
-0.016875,0.026500,0.000000,
-0.029025,0.011600,0.000000,
0.017375,0.022975,0.000000,
0.031075,0.010275,0.000000,
0.001600,0.016800,0.000000,
0.002800,-0.001800,0.000000
    ]; 

var diInd6 = [
    0, 1, 2, 0, 3, 1, 0, 4, 3, 5, 4, 0, 6, 7, 8, 4, 7, 6, 5, 9, 4, 9, 7, 4, 9, 10, 7, 10, 11, 7 ,11, 12, 7 ,5 ,13 ,9,
     14, 12, 11, 5 ,15 ,13 ,16, 15, 5, 17, 12, 14, 17, 18, 12, 16, 19, 15, 19, 18, 17, 16, 18, 19, 20, 18, 16
];

var diPos7 = [
-0.040200,0.117800,0.000000, // son 6 vértices
0.048000,0.136400,0.000000,
-0.040200,0.136400,0.000000,
0.018800,0.117800,0.000000,
-0.013800,-0.001800,0.000000,
-0.031200,0.005800,0.000000
]

var diInd7 = [
    0, 1, 2, 0, 3, 1, 3, 4, 1, 5, 4, 3
];

var diPos8 = [

-0.028425,0.127000,0.000000,  //son 32 vértices 
0.030125,0.126875,0.000000,
0.001400,0.138200,0.000000,
-0.040400,0.099000,0.000000,
-0.014775,0.114075,0.000000,
0.001000,0.119600,0.000000,
0.016075,0.113725,0.000000,
0.041600,0.098600,0.000000,
-0.020800,0.099400,0.000000,
0.022000,0.099000,0.000000,
-0.014450,0.084800,0.000000,
-0.036125,0.082725,0.000000,
0.015725,0.084675,0.000000,
0.037450,0.083125,0.000000,
0.000600,0.078600,0.000000,
0.024600,0.069600,0.000000,
-0.024200,0.069600,0.000000,
-0.038775,0.055850,0.000000,
0.000400,0.060000,0.000000,
0.038825,0.055900,0.000000,
-0.017350,0.054000,0.000000,
0.017375,0.053850,0.000000,
0.043600,0.036800,0.000000,
-0.043600,0.037000,0.000000,
-0.024000,0.038400,0.000000,
0.024000,0.038400,0.000000,
-0.017250,0.022875,0.000000,
0.017925,0.023325,0.000000,
-0.030900,0.009425,0.000000,
0.031150,0.009325,0.000000,
0.000000,0.016800,0.000000,
0.000400,-0.001800,0.000000
];

var diInd8 = [
-0.028425,0.127000,0.000000,  ///son 32
0.030125,0.126875,0.000000,
0.001400,0.138200,0.000000,
-0.040400,0.099000,0.000000,
-0.014775,0.114075,0.000000,
0.001000,0.119600,0.000000,
0.016075,0.113725,0.000000,
0.041600,0.098600,0.000000,
-0.020800,0.099400,0.000000,
0.022000,0.099000,0.000000,
-0.014450,0.084800,0.000000,
-0.036125,0.082725,0.000000,
0.015725,0.084675,0.000000,
0.037450,0.083125,0.000000,
0.000600,0.078600,0.000000,
0.024600,0.069600,0.000000,
-0.024200,0.069600,0.000000,
-0.038775,0.055850,0.000000,
0.000400,0.060000,0.000000,
0.038825,0.055900,0.000000,
-0.017350,0.054000,0.000000,
0.017375,0.053850,0.000000,
0.043600,0.036800,0.000000,
-0.043600,0.037000,0.000000,
-0.024000,0.038400,0.000000,
0.024000,0.038400,0.000000,
-0.017250,0.022875,0.000000,
0.017925,0.023325,0.000000,
-0.030900,0.009425,0.000000,
0.031150,0.009325,0.000000,
0.000000,0.016800,0.000000,
0.000400,-0.001800,0.000000
];

var diInd8 = [
0, 1, 2, 3 ,4, 0, 4, 5, 0, 5, 1, 0, 5, 6, 1, 6, 7, 1, 3, 8, 4, 9, 7, 6, 3, 
10, 8, 11, 10, 3, 12, 7, 9, 12, 13, 7, 11, 14, 10, 14, 13, 12, 14, 15, 13, 16, 14, 11,
 16, 15, 14, 17, 15, 16, 17, 18, 15, 18, 19, 15, 17, 20, 18, 21, 19, 18,
  21, 22, 19, 23, 20, 17, 23, 24, 20, 25, 22, 21, 23, 26, 24, 27, 22, 25, 28, 26, 23, 27,
   29, 22, 30, 29, 27, 28, 30, 26, 28, 29, 30, 31, 29, 28
];

var diPos9 = [
-0.031450,0.125575,0.000000,  //son 23 vértices
0.029950,0.124025,0.000000,
-0.001200,0.138200,0.000000,
-0.042800,0.097800,0.000000,
-0.016875,0.113525,0.000000,
-0.000800,0.119600,0.000000,
0.015325,0.112250,0.000000,
0.042200,0.088400,0.000000,
-0.023200,0.098000,0.000000,
0.022000,0.095000,0.000000,
-0.016400,0.082875,0.000000,
-0.031600,0.069575,0.000000,
0.021875,0.090025,0.000000,
0.021000,0.084000,0.000000,
0.026800,0.038275,0.000000,
0.009900,0.078350,0.000000,
0.017000,0.063800,0.000000,
0.000000,0.076600,0.000000,
-0.004200,0.058000,0.000000,
0.006850,0.059550,0.000000,
0.003400,0.037375,0.000000,
-0.012600,-0.001800,0.000000,
-0.024600,0.012600,0.000000
];

var diInd9 = [
    0, 1, 2 ,3 ,4 ,0, 4, 5, 0, 5, 1, 0, 5, 6, 1, 6, 7, 1, 3, 8, 4, 9, 7, 6, 3, 
    10, 8, 11, 10, 3, 12, 7, 9, 13, 7, 12, 13, 14, 7, 15, 16, 13, 16, 14, 13, 11, 17,
    10, 17, 16, 15, 11, 16, 17, 18, 16, 11, 18, 19, 16, 20, 14, 16, 20, 21, 14, 22, 21, 20
];

var diNM = [
0.015900,0.088250,0.000000,  //son 44 vértices
0.044125,0.087475,0.000000,
0.028700,0.091600,0.000000,
0.068625,0.086800,0.000000,
0.107225,0.081950,0.000000,
0.085500,0.091600,0.000000,
-0.015300,0.000000,0.000000,
0.002500,0.089800,0.000000,
-0.015300,0.089800,0.000000,
0.002500,0.078000,0.000000,
0.055500,0.075400,0.000000,
0.078900,0.076600,0.000000,
0.092025,0.071200,0.000000,
0.115300,0.056400,0.000000,
0.002500,0.065200,0.000000,
0.013100,0.074125,0.000000,
0.024900,0.076600,0.000000,
0.036300,0.071675,0.000000,
0.069125,0.073450,0.000000,
0.058900,0.065200,0.000000,
0.041100,0.055800,0.000000,
0.097500,0.055600,0.000000,
0.002500,0.000000,0.000000,
0.058900,0.000000,0.000000,
0.115300,0.000000,0.000000,
0.041100,0.000000,0.000000,
0.097500,0.000000,0.000000,
-0.084500,0.088025,0.000000,
-0.048225,0.082725,0.000000,
-0.069900,0.091600,0.000000,
-0.114900,0.000000,0.000000,
-0.097100,0.089800,0.000000,
-0.114900,0.089800,0.000000,
-0.097100,0.078000,0.000000,
-0.096700,0.078000,0.000000,
-0.074700,0.077400,0.000000,
-0.061850,0.071450,0.000000,
-0.039300,0.055400,0.000000,
-0.097100,0.064400,0.000000,
-0.085675,0.074425,0.000000,
-0.057100,0.055600,0.000000,
-0.097100,0.000000,0.000000,
-0.057100,0.000000,0.000000,
-0.039300,0.000000,0.000000
];

var diIndNM = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 6, 9, 7, 9, 1, 0, 9, 10, 1, 10, 4, 3, 10, 11, 4, 11, 12, 4, 12, 13, 4, 6, 14, 9, 14, 15,
    9, 15, 16, 9, 16, 10, 9, 17, 10, 16, 10, 18, 11, 17, 18, 10, 17, 19, 18, 20, 19, 17, 21, 13, 12, 6 ,22, 14, 20, 23, 19,
     21, 24, 13, 25, 23, 20, 26, 24, 21, 27, 28, 29, 30, 31, 32, 30, 33, 31, 34, 28, 27, 34, 35, 28, 35, 36, 28, 36, 37, 28, 
     30, 34, 33, 30, 38, 34, 38, 39, 34, 39, 35, 34, 40, 37, 36, 30, 41, 38, 42, 37, 40, 42, 43, 37
];

var diGrado = [
-0.019325,0.137725,0.000000,
0.018925,0.137725,0.000000,
-0.000200,0.145600,0.000000,
-0.027200,0.118600,0.000000,
-0.011850,0.130250,0.000000,
-0.000200,0.135000,0.000000,
0.011550,0.130250,0.000000,
0.026800,0.118600,0.000000,
-0.016600,0.118600,0.000000,
0.016400,0.118600,0.000000,
-0.019325,0.099475,0.000000,
-0.011850,0.106850,0.000000,
0.011550,0.106850,0.000000,
0.018925,0.099475,0.000000,
-0.000200,0.102000,0.000000,
-0.000200,0.091600,0.000000
];

var diIndGrado = [
    0, 1, 2, 3, 4, 0, 4, 5, 0, 5, 1, 0, 5, 6, 1, 6, 7, 1, 3, 8, 4, 9, 7, 6, 10, 8, 3, 10, 11, 8, 12, 7,
    9, 12, 13, 7, 10, 14, 11, 14, 13, 12, 10, 13, 14, 15, 13, 10
];

var diPunto = [
-0.008575,0.018675,0.000000,  //son 8 vértices
0.008375,0.018675,0.000000,
-0.000100,0.022200,0.000000,
0.011900,0.010200,0.000000,
-0.012100,0.010200,0.000000,
-0.008575,0.001725,0.000000,
0.008375,0.001725,0.000000,
-0.000100,-0.001800,0.000000
];

var diIndPunto = [
    0, 1, 2, 0, 3, 1, 4, 3, 0, 5, 3, 4, 5, 6, 3, 7, 6, 5
];
    /////////////////////////////////////////////////////////////////////////////////////////////////////