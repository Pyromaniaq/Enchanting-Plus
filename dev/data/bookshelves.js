var X1Cap=0;
var X2Cap=0;
var Z1Cap=0;
var Z2Cap=0;

var X1Z1Cap=0;
var X1Z2Cap=0;
var X1Z3Cap=0;
var X1Z4Cap=0;

var X2Z1Cap=0;
var X2Z2Cap=0;
var X2Z3Cap=0;
var X2Z4Cap=0;

var X1Y1Cap=0;
var X1Y1Z1Cap=0;
var X1Y1Z2Cap=0;
var X1Y1Z3Cap=0;
var X1Y1Z4Cap=0;

var X2Y1Cap=0;
var X2Y1Z1Cap=0;
var X2Y1Z2Cap=0;
var X2Y1Z3Cap=0;
var X2Y1Z4Cap=0;

var Z1Y1Cap=0;
var Z2Y1Cap=0;

var Z1X1Cap=0;
var Z1X2Cap=0;
var Z2X1Cap=0;
var Z2X2Cap=0;

var Z1Y1X1Cap=0;
var Z1Y1X2Cap=0;
var Z2Y1X1Cap=0;
var Z2Y1X2Cap=0;


function x1(value){
if(value==0){
X1Cap+=4
DenyLvl+=4;
if(4<X1Cap){
X1Cap-=4;
DenyLvl-=4;}
}
if(value==1){
X1Cap-=4;
DenyLvl-=4;
if(0>X1Cap){
X1Cap+=4;
DenyLvl+=4;}
}
}

function x1y1(value){
if(value==0){
X1Y1Cap+=4
DenyLvl+=4;
if(4<X1Y1Cap){
X1Y1Cap-=4;
DenyLvl-=4;}
}
if(value==1){
X1Y1Cap-=4;
DenyLvl-=4;
if(0>X1Y1Cap){
X1Y1Cap+=4;
DenyLvl+=4;}
}
}

function x1z1(value){
if(value==0){
X1Z1Cap+=4
DenyLvl+=4;
if(4<X1Z1Cap){
X1Z1Cap-=4;
DenyLvl-=4;}
}
if(value==1){
X1Z1Cap-=4;
DenyLvl-=4;
if(0>X1Z1Cap){
X1Z1Cap+=4;
DenyLvl+=4;}
}
}

function x1z2(value){
if(value==0){
X1Z2Cap+=4
DenyLvl+=4;
if(4<X1Z2Cap){
X1Z2Cap-=4;
DenyLvl-=4;}
}
if(value==1){
X1Z2Cap-=4;
DenyLvl-=4;
if(0>X1Z2Cap){
X1Z2Cap+=4;
DenyLvl+=4;}
}
}

function x1z3(value){
if(value==0){
X1Z3Cap+=4
DenyLvl+=4;
if(4<X1Z3Cap){
X1Z3Cap-=4;
DenyLvl-=4;}
}
if(value==1){
X1Z3Cap-=4;
DenyLvl-=4;
if(0>X1Z3Cap){
X1Z3Cap+=4;
DenyLvl+=4;}
}
}

function x1z4(value){
if(value==0){
X1Z4Cap+=4
DenyLvl+=4;
if(4<X1Z4Cap){
X1Z4Cap-=4;
DenyLvl-=4;}
}
if(value==1){
X1Z4Cap-=4;
DenyLvl-=4;
if(0>X1Z4Cap){
X1Z4Cap+=4;
DenyLvl+=4;}
}
}

function x1y1z1(value){
if(value==0){
X1Y1Z1Cap+=4
DenyLvl+=4;
if(4<X1Y1Z1Cap){
X1Y1Z1Cap-=4;
DenyLvl-=4;}
}
if(value==1){
X1Y1Z1Cap-=4;
DenyLvl-=4;
if(0>X1Y1Z1Cap){
X1Y1Z1Cap+=4;
DenyLvl+=4;}
}
}

function x1y1z2(value){
if(value==0){
X1Y1Z2Cap+=4
DenyLvl+=4;
if(4<X1Y1Z2Cap){
X1Y1Z2Cap-=4;
DenyLvl-=4;}
}
if(value==1){
X1Y1Z2Cap-=4;
DenyLvl-=4;
if(0>X1Y1Z2Cap){
X1Y1Z2Cap+=4;
DenyLvl+=4;}
}
}

function x1y1z3(value){
if(value==0){
X1Y1Z3Cap+=4
DenyLvl+=4;
if(4<X1Y1Z3Cap){
X1Y1Z3Cap-=4;
DenyLvl-=4;}
}
if(value==1){
X1Y1Z3Cap-=4;
DenyLvl-=4;
if(0>X1Y1Z3Cap){
X1Y1Z3Cap+=4;
DenyLvl+=4;}
}
}

function x1y1z4(value){
if(value==0){
X1Y1Z4Cap+=4
DenyLvl+=4;
if(4<X1Y1Z4Cap){
X1Y1Z4Cap-=4;
DenyLvl-=4;}
}
if(value==1){
X1Y1Z4Cap-=4;
DenyLvl-=4;
if(0>X1Y1Z4Cap){
X1Y1Z4Cap+=4;
DenyLvl+=4;}
}
}


function x2(value){
if(value==0){
X2Cap+=4
DenyLvl+=4;
if(4<X2Cap){
X2Cap-=4;
DenyLvl-=4;}
}
if(value==1){
X2Cap-=4;
DenyLvl-=4;
if(0>X2Cap){
X2Cap+=4;
DenyLvl+=4;}
}
}

function x2y1(value){
if(value==0){
X2Y1Cap+=4
DenyLvl+=4;
if(4<X2Y1Cap){
X2Y1Cap-=4;
DenyLvl-=4;}
}
if(value==1){
X2Y1Cap-=4;
DenyLvl-=4;
if(0>X2Y1Cap){
X2Y1Cap+=4;
DenyLvl+=4;}
}
}

function x2z1(value){
if(value==0){
X2Z1Cap+=4
DenyLvl+=4;
if(4<X2Z1Cap){
X2Z1Cap-=4;
DenyLvl-=4;}
}
if(value==1){
X2Z1Cap-=4;
DenyLvl-=4;
if(0>X2Z1Cap){
X2Z1Cap+=4;
DenyLvl+=4;}
}
}

function x2z2(value){
if(value==0){
X2Z2Cap+=4
DenyLvl+=4;
if(4<X2Z2Cap){
X2Z2Cap-=4;
DenyLvl-=4;}
}
if(value==1){
X2Z2Cap-=4;
DenyLvl-=4;
if(0>X2Z2Cap){
X2Z2Cap+=4;
DenyLvl+=4;}
}
}

function x2z3(value){
if(value==0){
X2Z3Cap+=4
DenyLvl+=4;
if(4<X2Z3Cap){
X2Z3Cap-=4;
DenyLvl-=4;}
}
if(value==1){
X2Z3Cap-=4;
DenyLvl-=4;
if(0>X2Z3Cap){
X2Z3Cap+=4;
DenyLvl+=4;}
}
}

function x2z4(value){
if(value==0){
X2Z4Cap+=4
DenyLvl+=4;
if(4<X2Z4Cap){
X2Z4Cap-=4;
DenyLvl-=4;}
}
if(value==1){
X2Z4Cap-=4;
DenyLvl-=4;
if(0>X2Z4Cap){
X2Z4Cap+=4;
DenyLvl+=4;}
}
}

function x2y1z1(value){
if(value==0){
X2Y1Z1Cap+=4
DenyLvl+=4;
if(4<X2Y1Z1Cap){
X2Y1Z1Cap-=4;
DenyLvl-=4;}
}
if(value==1){
X2Y1Z1Cap-=4;
DenyLvl-=4;
if(0>X2Y1Z1Cap){
X2Y1Z1Cap+=4;
DenyLvl+=4;}
}
}

function x2y1z2(value){
if(value==0){
X2Y1Z2Cap+=4
DenyLvl+=4;
if(4<X2Y1Z2Cap){
X2Y1Z2Cap-=4;
DenyLvl-=4;}
}
if(value==1){
X2Y1Z2Cap-=4;
DenyLvl-=4;
if(0>X2Y1Z2Cap){
X2Y1Z2Cap+=4;
DenyLvl+=4;}
}
}

function x2y1z3(value){
if(value==0){
X2Y1Z3Cap+=4
DenyLvl+=4;
if(4<X2Y1Z3Cap){
X2Y1Z3Cap-=4;
DenyLvl-=4;}
}
if(value==1){
X2Y1Z3Cap-=4;
DenyLvl-=4;
if(0>X2Y1Z3Cap){
X2Y1Z3Cap+=4;
DenyLvl+=4;}
}
}

function x2y1z4(value){
if(value==0){
X2Y1Z4Cap+=4
DenyLvl+=4;
if(4<X2Y1Z4Cap){
X2Y1Z4Cap-=4;
DenyLvl-=4;}
}
if(value==1){
X2Y1Z4Cap-=4;
DenyLvl-=4;
if(0>X2Y1Z4Cap){
X2Y1Z4Cap+=4;
DenyLvl+=4;}
}
}


function z1(value){
if(value==0){
Z1Cap+=4
DenyLvl+=4;
if(4<Z1Cap){
Z1Cap-=4;
DenyLvl-=4;}
}
if(value==1){
Z1Cap-=4;
DenyLvl-=4;
if(0>Z1Cap){
Z1Cap+=4;
DenyLvl+=4;}
}
}

function z1y1(value){
if(value==0){
Z1Y1Cap+=4
DenyLvl+=4;
if(4<Z1Y1Cap){
Z1Y1Cap-=4;
DenyLvl-=4;}
}
if(value==1){
Z1Y1Cap-=4;
DenyLvl-=4;
if(0>Z1Y1Cap){
Z1Y1Cap+=4;
DenyLvl+=4;}
}
}

function z1x1(value){
if(value==0){
Z1X1Cap+=4
DenyLvl+=4;
if(4<Z1X1Cap){
Z1X1Cap-=4;
DenyLvl-=4;}
}
if(value==1){
Z1X1Cap-=4;
DenyLvl-=4;
if(0>Z1X1Cap){
Z1X1Cap+=4;
DenyLvl+=4;}
}
}

function z1x2(value){
if(value==0){
Z1X2Cap+=4
DenyLvl+=4;
if(4<Z1X2Cap){
Z1X2Cap-=4;
DenyLvl-=4;}
}
if(value==1){
Z1X2Cap-=4;
DenyLvl-=4;
if(0>Z1X2Cap){
Z1X2Cap+=4;
DenyLvl+=4;}
}
}

function z1y1x1(value){
if(value==0){
Z1Y1X1Cap+=4
DenyLvl+=4;
if(4<Z1Y1X1Cap){
Z1Y1X1Cap-=4;
DenyLvl-=4;}
}
if(value==1){
Z1Y1X1Cap-=4;
DenyLvl-=4;
if(0>Z1Y1X1Cap){
Z1Y1X1Cap+=4;
DenyLvl+=4;}
}
}

function z1y1x2(value){
if(value==0){
Z1Y1X2Cap+=4
DenyLvl+=4;
if(4<Z1Y1X2Cap){
Z1Y1X2Cap-=4;
DenyLvl-=4;}
}
if(value==1){
Z1Y1X2Cap-=4;
DenyLvl-=4;
if(0>Z1Y1X2Cap){
Z1Y1X2Cap+=4;
DenyLvl+=4;}
}
}


function z2(value){
if(value==0){
Z2Cap+=4
DenyLvl+=4;
if(4<Z2Cap){
Z2Cap-=4;
DenyLvl-=4;}
}
if(value==1){
Z2Cap-=4;
DenyLvl-=4;
if(0>Z2Cap){
Z2Cap+=4;
DenyLvl+=4;}
}
}

function z2y1(value){
if(value==0){
Z2Y1Cap+=4
DenyLvl+=4;
if(4<Z2Y1Cap){
Z2Y1Cap-=4;
DenyLvl-=4;}
}
if(value==1){
Z2Y1Cap-=4;
DenyLvl-=4;
if(0>Z2Y1Cap){
Z2Y1Cap+=4;
DenyLvl+=4;}
}
}

function z2x1(value){
if(value==0){
Z2X1Cap+=4
DenyLvl+=4;
if(4<Z2X1Cap){
Z2X1Cap-=4;
DenyLvl-=4;}
}
if(value==1){
Z2X1Cap-=4;
DenyLvl-=4;
if(0>Z2X1Cap){
Z2X1Cap+=4;
DenyLvl+=4;}
}
}

function z2x2(value){
if(value==0){
Z2X2Cap+=4
DenyLvl+=4;
if(4<Z2X2Cap){
Z2X2Cap-=4;
DenyLvl-=4;}
}
if(value==1){
Z2X2Cap-=4;
DenyLvl-=4;
if(0>Z2X2Cap){
Z2X2Cap+=4;
DenyLvl+=4;}
}
}

function z2y1x1(value){
if(value==0){
Z2Y1X1Cap+=4
DenyLvl+=4;
if(4<Z2Y1X1Cap){
Z2Y1X1Cap-=4;
DenyLvl-=4;}
}
if(value==1){
Z2Y1X1Cap-=4;
DenyLvl-=4;
if(0>Z2Y1X1Cap){
Z2Y1X1Cap+=4;
DenyLvl+=4;}
}
}

function z2y1x2(value){
if(value==0){
Z2Y1X2Cap+=4
DenyLvl+=4;
if(4<Z2Y1X2Cap){
Z2Y1X2Cap-=4;
DenyLvl-=4;}
}
if(value==1){
Z2Y1X2Cap-=4;
DenyLvl-=4;
if(0>Z2Y1X2Cap){
Z2Y1X2Cap+=4;
DenyLvl+=4;}
}
}


Callback.addCallback("ItemUse",function(c,i,b){
if(b.id==BlockID.etp){
var Block=World.getBlock;
/*      X+2      */
if(Block(c.x+2,c.y,c.z).id==47){
x1(0);
}else x1(1);
if(Block(c.x+2,c.y+1,c.z).id==47){
x1y1(0);
}else x1y1(1);
if(Block(c.x+2,c.y,c.z-1).id==47){
x1z1(0);
}else x1z1(1);
if(Block(c.x+2,c.y,c.z+1).id==47){
x1z2(0);
}else x1z2(1);
if(Block(c.x+2,c.y,c.z-2).id==47){
x1z3(0);
}else x1z3(1);
if(Block(c.x+2,c.y,c.z+2).id==47){
x1z4(0);
}else x1z4(1);
if(Block(c.x+2,c.y+1,c.z-1).id==47){
x1y1z1(0);
}else x1y1z1(1);
if(Block(c.x+2,c.y+1,c.z+1).id==47){
x1y1z2(0);
}else x1y1z2(1);
if(Block(c.x+2,c.y+1,c.z-2).id==47){
x1y1z3(0);
}else x1y1z3(1);
if(Block(c.x+2,c.y+1,c.z+2).id==47){
x1y1z4(0);
}else x1y1z4(1);
/*      X-2      */
if(Block(c.x-2,c.y,c.z).id==47){
x2(0);
}else x2(1);
if(Block(c.x-2,c.y+1,c.z).id==47){
x2y1(0);
}else x2y1(1);
if(Block(c.x-2,c.y,c.z-1).id==47){
x2z1(0);
}else x2z1(1);
if(Block(c.x-2,c.y,c.z+1).id==47){
x2z2(0);
}else x2z2(1);
if(Block(c.x-2,c.y,c.z-2).id==47){
x2z3(0);
}else x2z3(1);
if(Block(c.x-2,c.y,c.z+2).id==47){
x2z4(0);
}else x2z4(1);
if(Block(c.x-2,c.y+1,c.z-1).id==47){
x2y1z1(0);
}else x2y1z1(1);
if(Block(c.x-2,c.y+1,c.z+1).id==47){
x2y1z2(0);
}else x2y1z2(1);
if(Block(c.x-2,c.y+1,c.z-2).id==47){
x2y1z3(0);
}else x2y1z3(1);
if(Block(c.x-2,c.y+1,c.z+2).id==47){
x2y1z4(0);
}else x2y1z4(1);
/*      Z+2      */
if(Block(c.x,c.y,c.z+2).id==47){
z1(0);
}else z1(1);
if(Block(c.x,c.y+1,c.z+2).id==47){
z1y1(0);
}else z1y1(1);
if(Block(c.x-1,c.y,c.z+2).id==47){
z1x1(0);
}else z1x1(1);
if(Block(c.x+1,c.y,c.z+2).id==47){
z1x2(0);
}else z1x2(1);
if(Block(c.x-1,c.y+1,c.z+2).id==47){
z1y1x1(0);
}else z1y1x1(1);
if(Block(c.x+1,c.y+1,c.z+2).id==47){
z1y1x2(0);
}else z1y1x2(1);
/*      Z-2      */
if(Block(c.x,c.y,c.z-2).id==47){
z2(0);
}else z2(1);
if(Block(c.x,c.y+1,c.z-2).id==47){
z2y1(0);
}else z2y1(1);
if(Block(c.x-1,c.y,c.z-2).id==47){
z2x1(0);
}else z2x1(1);
if(Block(c.x+1,c.y,c.z-2).id==47){
z2x2(0);
}else z2x2(1);
if(Block(c.x-1,c.y+1,c.z-2).id==47){
z2y1x1(0);
}else z2y1x1(1);
if(Block(c.x+1,c.y+1,c.z-2).id==47){
z2y1x2(0);
}else z2y1x2(1);
}});