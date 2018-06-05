var lootValue=0;
var unbreakValue=0;
var efficiencyValue=0;
var fortuneValue=0;
var silkTouchValue=0;
var fireAspectValue=0;
var sharpnessValue=0;
var infinityValue=0;
var powerValue=0;
var knockbackValue=0;
var flameValue=0;
var punchValue=0;
var smiteValue=0;
var baneValue=0;

var CostLvl=0;
var DenyLvl=10;

var LootCap=0;
var UnbreakCap=0;
var EfficiencyCap=0;
var SilkTouchCap=0;
var FortuneCap=0;
var FireAspectCap=0;
var SharpnessCap=0;
var InfinityCap=0;
var PowerCap=0;
var KnockbackCap=0;
var FlameCap=0;
var PunchCap=0;
var SmiteCap=0;
var BaneCap=0;

var sharpness=true;
var smite=true;
var bane=true;
var silkTouch=true;
var fortune=true;

var protection=true;
var fireProtection=true;
var blastProtection=true;
var projectileProtection=true;

var repairCost=5;

var epGUI = new UI.StandartWindow({
standart: {
       header: {
          text: { 
          text: Translation.translate("Advanced Enchantment Table") 
          }

        },
          inventory: {
          standart: true

          },

          background: {
          standart: true

          },
          minHeight: 1600

         },

     drawing: [],

     elements: {
     "tool_slot": {type: "slot", x: 400, y: 100, size: 75},
     
     "looting": {type:"text",x:400,y:1515,text:Translation.translate("Looting:"),font:{color: android.graphics.Color.BLACK,shadow:.6,size:25}},
     
      "looting_text": {type:"text",x:845,y:1515,text:lootValue+"",font:{color: android.graphics.Color.WHITE,shadow:.6,size:25}},
      
     "loot_btn_minus": {type:"button",x:750,y:1500,bitmap: "btn_left_up",bitmap2:"btn_left_down",scale:3,clicker:{
     onClick: function(container){
     var content = container.getGuiContent();
     var slot = container.getSlot("tool_slot");
     if(lootValue>0) lootValue -=1;
      
     if(lootValue==1){
     CostLvl-=3;
     LootCap-=3;
     }
     if(lootValue==2){
     CostLvl-=8;
     LootCap-=8;
     }
     if(lootValue==0){
     CostLvl-=9;
     LootCap-=9;
     if(LootCap<0){
     LootCap+=9;
     CostLvl+=9;
     }}
     
     content.elements["looting_text"].text=lootValue+"";
     }}
     },
     
     "loot_btn_plus": {type:"button",x:900,y:1500,bitmap: "btn_right_up",bitmap2:"btn_right_down",scale:3,clicker:{
     onClick: function(container){
     var slot = container.getSlot("tool_slot");
    var content = container.getGuiContent();
    
     if(lootValue<3) lootValue += 1;
     
     if(lootValue==1){
     CostLvl+=9;
     LootCap+=9;
     }
     if(lootValue==2){
     CostLvl+=3;
     LootCap+=3;
     }
     if(lootValue==3){
     CostLvl+=8;
     LootCap+=8;
     if(20<LootCap){
     CostLvl-=8;
     LootCap-=8;
     }}
     
     content.elements["looting_text"].text=lootValue+"";
     }}
     },
      
     "unbreaking_text": {type:"text",x:845,y:215,text:unbreakValue+"",font:{color: android.graphics.Color.WHITE,shadow:.6,size:25}},
      
     "unbreaking": {type:"text",x:400,y:215,text:Translation.translate("Unbreaking:"),font:{color: android.graphics.Color.BLACK,shadow:.6,size:25}},

     
     "unbreak_btn_minus": {type:"button",x:750,y:200,bitmap: "btn_left_up",bitmap2:"btn_left_down",scale:3,clicker:{
     onClick: function(container){
     var content = container.getGuiContent();
     var slot = container.getSlot("tool_slot");
     if(unbreakValue>0) unbreakValue -=1;
     
     if(unbreakValue==1){
     CostLvl-=6;
     UnbreakCap-=6;
     }
     if(unbreakValue==2){
     CostLvl-=6;
     UnbreakCap-=6;
     }
     if(unbreakValue==0){
     CostLvl-=6;
     UnbreakCap-=6;
     if(UnbreakCap<0){
     UnbreakCap+=6;
     CostLvl+=6;
     }}
 
     content.elements["unbreaking_text"].text=unbreakValue+"";
     }}
     },
     
     "unbreak_btn_plus": {type:"button",x:900,y:200,bitmap: "btn_right_up",bitmap2:"btn_right_down",scale:3,clicker:{
     onClick: function(container){
     var slot = container.getSlot("tool_slot");
    var content = container.getGuiContent();
        if(unbreakValue<3) unbreakValue += 1;
        
     if(unbreakValue==1){
     CostLvl+=6;
     UnbreakCap+=6;
     }
     if(unbreakValue==2){
     CostLvl+=6;
     UnbreakCap+=6;
     }
     if(unbreakValue==3){
     CostLvl+=6;
     UnbreakCap+=6;
     if(18<UnbreakCap){
     CostLvl-=6;
     UnbreakCap-=6;
     }}
              
     content.elements["unbreaking_text"].text=unbreakValue+"";
     }}
     },
     
     "efficiency_text": {type:"text",x:845,y:315,text:efficiencyValue+"",font:{color: android.graphics.Color.WHITE,shadow:.6,size:25}},
      
     "efficiency": {type:"text",x:400,y:315,text:Translation.translate("Efficiency:"),font:{color: android.graphics.Color.BLACK,shadow:.6,size:25}},

     
     "efficiency_btn_minus": {type:"button",x:750,y:300,bitmap: "btn_left_up",bitmap2:"btn_left_down",scale:3,clicker:{
     onClick: function(container){
     var content = container.getGuiContent();
     var slot = container.getSlot("tool_slot");
     if(efficiencyValue>0) efficiencyValue -=1;
     
     if(efficiencyValue==1){
     CostLvl-=4;
     EfficiencyCap-=4;
     }
     if(efficiencyValue==2){
     CostLvl-=5;
     EfficiencyCap-=5;
     }
     if(efficiencyValue==3){
     CostLvl-=4;
     EfficiencyCap-=4;
     }
     if(efficiencyValue==4){
     CostLvl-=8;
     EfficiencyCap-=8;
     }
     if(efficiencyValue==0){
     CostLvl-=5;
     EfficiencyCap-=5;
     if(0>EfficiencyCap){
     CostLvl+=5;
     EfficiencyCap+=5;
     }}
     content.elements["efficiency_text"].text=efficiencyValue+"";
     }}
     },
     
     "efficiency_btn_plus": {type:"button",x:900,y:300,bitmap: "btn_right_up",bitmap2:"btn_right_down",scale:3,clicker:{
     onClick: function(container){
     var slot = container.getSlot("tool_slot");
    var content = container.getGuiContent();
        if(efficiencyValue<5) efficiencyValue += 1;
        
     if(efficiencyValue==1){
     CostLvl+=5;
     EfficiencyCap+=5;
     }
     if(efficiencyValue==2){
     CostLvl+=4;
     EfficiencyCap+=4;
     }
     if(efficiencyValue==3){
     CostLvl+=5;
     EfficiencyCap+=5;
     }
     if(efficiencyValue==4){
     CostLvl+=4;
     EfficiencyCap+=4;
     }
     if(efficiencyValue==5){
     CostLvl+=8;
     EfficiencyCap+=8;
     if(26<EfficiencyCap){
     CostLvl-=8;
     EfficiencyCap-=8;
     }}
  
     content.elements["efficiency_text"].text=efficiencyValue+"";
     }}
     },

     "fortune_text": {type:"text",x:845,y:415,text:fortuneValue+"",font:{color: android.graphics.Color.WHITE,shadow:.6,size:25}},
      
     "fortune": {type:"text",x:400,y:415,text:Translation.translate("Fortune:"),font:{color: android.graphics.Color.BLACK,shadow:.6,size:25}},

     
     "fortune_btn_minus": {type:"button",x:750,y:400,bitmap: "btn_left_up",bitmap2:"btn_left_down",scale:3,clicker:{
     onClick: function(container){
     var content = container.getGuiContent();
     var slot = container.getSlot("tool_slot");
     if(fortune){
     if(fortuneValue>0) fortuneValue -=1;
     
     if(fortuneValue>0){
     silkTouch=false;
     content.elements["silkTouch_text"].text=silkTouchValue+"";
     content.elements["silkTouch_text"].font.color=android.graphics.Color.GRAY;
     content.elements["silkTouch"].font.color=android.graphics.Color.GRAY;
     } else {
     silkTouch=true;
     content.elements["silkTouch_text"].text=silkTouchValue+"";
     content.elements["silkTouch_text"].font.color=android.graphics.Color.WHITE;
     content.elements["silkTouch"].font.color=android.graphics.Color.BLACK;
     }
     
     if(fortuneValue==1){
     CostLvl-=3;
     FortuneCap-=3;
     }
     if(fortuneValue==2){
     CostLvl-=8;
     FortuneCap-=8;
     }
     if(fortuneValue==0){
     CostLvl-=9;
     FortuneCap-=9;
     if(FortuneCap<0){
     FortuneCap+=9;
     CostLvl+=9;
     }}
     content.elements["fortune_text"].text=fortuneValue+"";
     }
     if(!fortune){
     fortuneValue=0;
     FortuneCap=0;
     content.elements["fortune_text"].text=fortuneValue+"";
     content.elements["fortune_text"].font.color=android.graphics.Color.GRAY;
     }
     
     }}
     },
     
     "fortune_btn_plus": {type:"button",x:900,y:400,bitmap: "btn_right_up",bitmap2:"btn_right_down",scale:3,clicker:{
     onClick: function(container){
     var slot = container.getSlot("tool_slot");
    var content = container.getGuiContent();
    if(fortune){
        if(fortuneValue<3) fortuneValue += 1;
     
     if(fortuneValue>0){
     silkTouch=false;
     content.elements["silkTouch_text"].text=silkTouchValue+"";
     content.elements["silkTouch_text"].font.color=android.graphics.Color.GRAY;
     content.elements["silkTouch"].font.color=android.graphics.Color.GRAY;
     } else {
     silkTouch=true;
     content.elements["silkTouch_text"].text=silkTouchValue+"";
     content.elements["silkTouch_text"].font.color=android.graphics.Color.WHITE;
     content.elements["silkTouch"].font.color=android.graphics.Color.BLACK;
     }
        
     if(fortuneValue==1){
     CostLvl+=9;
     FortuneCap+=9;
     }
     if(fortuneValue==2){
     CostLvl+=3;
     FortuneCap+=3;
     }
     if(fortuneValue==3){
     CostLvl+=8;
     FortuneCap+=8;
     if(20<FortuneCap){
     CostLvl-=8;
     FortuneCap-=8;
     }}
        
     content.elements["fortune_text"].text=fortuneValue+"";
     }
     if(!fortune){
     fortuneValue=0;
     FortuneCap=0;
     content.elements["fortune_text"].text=fortuneValue+"";
     content.elements["fortune_text"].font.color=android.graphics.Color.GRAY;
     }
 
     }}
     },

     "silkTouch_text": {type:"text",x:845,y:515,text:silkTouchValue+"",font:{color: android.graphics.Color.WHITE,shadow:.6,size:25}},
      
     "silkTouch": {type:"text",x:400,y:515,text:Translation.translate("Silk Touch:"),font:{color: android.graphics.Color.BLACK,shadow:.6,size:25}},

     
     "silkTouch_btn_minus": {type:"button",x:750,y:500,bitmap: "btn_left_up",bitmap2:"btn_left_down",scale:3,clicker:{
     onClick: function(container){
     var content = container.getGuiContent();
     var slot = container.getSlot("tool_slot");
     if(silkTouch){
     if(silkTouchValue>0) silkTouchValue -=1;
     
     if(silkTouchValue>0){
     fortune=false;
     content.elements["fortune_text"].text=fortuneValue+"";
     content.elements["fortune_text"].font.color=android.graphics.Color.GRAY;
     content.elements["fortune"].font.color=android.graphics.Color.GRAY;
     } else {
     fortune=true;
     content.elements["fortune_text"].text=fortuneValue+"";
     content.elements["fortune_text"].font.color=android.graphics.Color.WHITE;
     content.elements["fortune"].font.color=android.graphics.Color.BLACK;
     }
     
     if(silkTouchValue==0){
     CostLvl-=12;
     SilkTouchCap-=12;
     if(0>SilkTouchCap){
     CostLvl+=12;
     SilkTouchCap+=12;
     }}
 
     content.elements["silkTouch_text"].text=silkTouchValue+"";
     }
     if(!silkTouch){
     silkTouchValue=0;
     SilkTouchCap=0;
     content.elements["silkTouch_text"].text=silkTouchValue+"";
     content.elements["silkTouch_text"].font.color=android.graphics.Color.GRAY;
     }
 
     }}
     },
     
     "silkTouch_btn_plus": {type:"button",x:900,y:500,bitmap: "btn_right_up",bitmap2:"btn_right_down",scale:3,clicker:{
     onClick: function(container){
     var slot = container.getSlot("tool_slot");
    var content = container.getGuiContent();
    if(silkTouch){
        if(silkTouchValue<1) silkTouchValue += 1;
     
     if(silkTouchValue>0){
     fortune=false;
     content.elements["fortune_text"].text=fortuneValue+"";
     content.elements["fortune_text"].font.color=android.graphics.Color.GRAY;
     content.elements["fortune"].font.color=android.graphics.Color.GRAY;
     } else {
     fortune=true;
     content.elements["fortune_text"].text=fortuneValue+"";
     content.elements["fortune_text"].font.color=android.graphics.Color.WHITE;
     content.elements["fortune"].font.color=android.graphics.Color.BLACK;
     }
     
     if(silkTouchValue==1){
     CostLvl+=12;
     SilkTouchCap+=12;
     if(12<SilkTouchCap){
     CostLvl-=12;
     SilkTouchCap-=12;
     }}
 
     content.elements["silkTouch_text"].text=silkTouchValue+"";
     }
     if(!silkTouch){
     silkTouchValue=0;
     SilkTouchCap=0;
     content.elements["silkTouch_text"].text=silkTouchValue+"";
     content.elements["silkTouch_text"].font.color=android.graphics.Color.GRAY;
     }
 
     }}
     },

     "fireAspect_text": {type:"text",x:845,y:615,text:fireAspectValue+"",font:{color: android.graphics.Color.WHITE,shadow:.6,size:25}},
      
     "fireAspect": {type:"text",x:400,y:615,text:Translation.translate("Fire Aspect:"),font:{color: android.graphics.Color.BLACK,shadow:.6,size:25}},

     
     "fireAspect_btn_minus": {type:"button",x:750,y:600,bitmap: "btn_left_up",bitmap2:"btn_left_down",scale:3,clicker:{
     onClick: function(container){
     var content = container.getGuiContent();
     var slot = container.getSlot("tool_slot");
     if(fireAspectValue>0) fireAspectValue -=1;
     
     if(fireAspectValue==1){
     CostLvl-=9;
     FireAspectCap-=9;
     }
     if(fireAspectValue==0){
     CostLvl-=9;
     FireAspectCap-=9;
     if(0>FireAspectCap){
     CostLvl+=9;
     FireAspectCap+=9;
     }}

     content.elements["fireAspect_text"].text=fireAspectValue+"";
     }}
     },
     
     "fireAspect_btn_plus": {type:"button",x:900,y:600,bitmap: "btn_right_up",bitmap2:"btn_right_down",scale:3,clicker:{
     onClick: function(container){
     var slot = container.getSlot("tool_slot");
    var content = container.getGuiContent();
        if(fireAspectValue<2) fireAspectValue += 1;
        
     if(fireAspectValue==1){
     CostLvl+=9;
     FireAspectCap+=9;
     }
     if(fireAspectValue==2){
     CostLvl+=9;
     FireAspectCap+=9;
     if(18<FireAspectCap){
     CostLvl-=9;
     FireAspectCap-=9;
     }}
 
     content.elements["fireAspect_text"].text=fireAspectValue+"";
     }}
     },

     "sharpness_text": {type:"text",x:845,y:715,text:sharpnessValue+"",font:{color: android.graphics.Color.WHITE,shadow:.6,size:25}},
      
     "sharpness": {type:"text",x:400,y:715,text:Translation.translate("Sharpness:"),font:{color: android.graphics.Color.BLACK,shadow:.6,size:25}},

     
     "sharpness_btn_minus": {type:"button",x:750,y:700,bitmap: "btn_left_up",bitmap2:"btn_left_down",scale:3,clicker:{
     onClick: function(container){
     var content = container.getGuiContent();
     var slot = container.getSlot("tool_slot");
     if(sharpness){
     if(sharpnessValue>0) sharpnessValue -=1;
     
     if(sharpnessValue>0){
     smite=false;
     bane=false;
     content.elements["smite_text"].text=smiteValue+"";
     content.elements["smite_text"].font.color=android.graphics.Color.GRAY;
     content.elements["smite"].font.color=android.graphics.Color.GRAY;
     content.elements["bane_text"].text=baneValue+"";
     content.elements["bane_text"].font.color=android.graphics.Color.GRAY;
     content.elements["bane"].font.color=android.graphics.Color.GRAY;
     } else {
     smite=true;
     bane=true;
     content.elements["smite_text"].text=smiteValue+"";
     content.elements["smite_text"].font.color=android.graphics.Color.WHITE;
     content.elements["smite"].font.color=android.graphics.Color.BLACK;
     content.elements["bane_text"].text=baneValue+"";
     content.elements["bane_text"].font.color=android.graphics.Color.WHITE;
     content.elements["bane"].font.color=android.graphics.Color.BLACK;
     }
     
     if(sharpnessValue==1){
     CostLvl-=4;
     SharpnessCap-=4;
     }
     if(sharpnessValue==2){
     CostLvl-=4;
     SharpnessCap-=4;
     }
     if(sharpnessValue==3){
     CostLvl-=3;
     SharpnessCap-=3;
     }
     if(sharpnessValue==4){
     CostLvl-=8;
     SharpnessCap-=8;
     }
     if(sharpnessValue==0){
     CostLvl-=1;
     SharpnessCap-=1;
     if(0>SharpnessCap){
     CostLvl+=1;
     SharpnessCap+=1;
     }}
       
     content.elements["sharpness_text"].text=sharpnessValue+"";
     }
     if(!sharpness){
        sharpnessValue=0;
        SharpnessCap=0;
        content.elements["sharpness_text"].text=sharpnessValue+"";
     content.elements["sharpness_text"].font.color=android.graphics.Color.GRAY;
     }
     
     }}
     },
     
     "sharpness_btn_plus": {type:"button",x:900,y:700,bitmap: "btn_right_up",bitmap2:"btn_right_down",scale:3,clicker:{
     onClick: function(container){
     var slot = container.getSlot("tool_slot");
    var content = container.getGuiContent();
    if(sharpness){
        if(sharpnessValue<5) sharpnessValue += 1;
        
     if(sharpnessValue>0){
     smite=false;
     bane=false;
     content.elements["smite_text"].text=smiteValue+"";
     content.elements["smite_text"].font.color=android.graphics.Color.GRAY;
     content.elements["smite"].font.color=android.graphics.Color.GRAY;

     content.elements["bane_text"].text=baneValue+"";
     content.elements["bane_text"].font.color=android.graphics.Color.GRAY;
     content.elements["bane"].font.color=android.graphics.Color.GRAY;

     } else {
     smite=true;
     bane=true;
     content.elements["smite_text"].text=smiteValue+"";
     content.elements["smite_text"].font.color=android.graphics.Color.WHITE;
     content.elements["smite"].font.color=android.graphics.Color.BLACK;

     content.elements["bane_text"].text=baneValue+"";
     content.elements["bane_text"].font.color=android.graphics.Color.WHITE;
     content.elements["bane"].font.color=android.graphics.Color.BLACK;

     }
     
     if(sharpnessValue==1){
     CostLvl+=1;
     SharpnessCap+=1;
     }
     if(sharpnessValue==2){
     CostLvl+=4;
     SharpnessCap+=4;
     }
     if(sharpnessValue==3){
     CostLvl+=4;
     SharpnessCap+=4;
     }
     if(sharpnessValue==4){
     CostLvl+=3;
     SharpnessCap+=3;
     }
     if(sharpnessValue==5){
     CostLvl+=8;
     SharpnessCap+=8;
     if(20<SharpnessCap){
     CostLvl-=8;
     SharpnessCap-=8;
     }}
     
     content.elements["sharpness_text"].text=sharpnessValue+"";
     }
     if(!sharpness){
        sharpnessValue=0;
        CostLvl-SharpnessCap;
        SharpnessCap=0;
        content.elements["sharpness_text"].text=sharpnessValue+"";
     content.elements["sharpness_text"].font.color=android.graphics.Color.GRAY;
     }
     
     }}
     },

     "infinity_text": {type:"text",x:845,y:815,text:infinityValue+"",font:{color: android.graphics.Color.WHITE,shadow:.6,size:25}},
      
     "infinity": {type:"text",x:400,y:815,text:Translation.translate("Infinity:"),font:{color: android.graphics.Color.BLACK,shadow:.6,size:25}},

     
     "infinity_btn_minus": {type:"button",x:750,y:800,bitmap: "btn_left_up",bitmap2:"btn_left_down",scale:3,clicker:{
     onClick: function(container){
     var content = container.getGuiContent();
     var slot = container.getSlot("tool_slot");
     if(infinityValue>0) infinityValue -=1;
     
     if(infinityValue==0){
     CostLvl-=11;
     InfinityCap-=11;
     if(0>InfinityCap){
     CostLvl+=11;
     InfinityCap+=11;
     }}
     
     content.elements["infinity_text"].text=infinityValue+"";
     }}
     },
     
     "infinity_btn_plus": {type:"button",x:900,y:800,bitmap: "btn_right_up",bitmap2:"btn_right_down",scale:3,clicker:{
     onClick: function(container){
     var slot = container.getSlot("tool_slot");
    var content = container.getGuiContent();
        if(infinityValue<1) infinityValue += 1;
        
     if(infinityValue==1){
     CostLvl+=11;
     InfinityCap+=11;
     if(11<InfinityCap){
     CostLvl-=11;
     InfinityCap-=11;
     }}
 
     content.elements["infinity_text"].text=infinityValue+"";
     }}
     },

     "power_text": {type:"text",x:845,y:915,text:powerValue+"",font:{color: android.graphics.Color.WHITE,shadow:.6,size:25}},
      
     "power": {type:"text",x:400,y:915,text:Translation.translate("Power:"),font:{color: android.graphics.Color.BLACK,shadow:.6,size:25}},

     
     "power_btn_minus": {type:"button",x:750,y:900,bitmap: "btn_left_up",bitmap2:"btn_left_down",scale:3,clicker:{
     onClick: function(container){
     var content = container.getGuiContent();
     var slot = container.getSlot("tool_slot");
     if(powerValue>0) powerValue -=1;
     
     if(powerValue==1){
     CostLvl-=3;
     PowerCap-=3;
     }
     if(powerValue==2){
     CostLvl-=3;
     PowerCap-=3;
     }
     if(powerValue==3){
     CostLvl-=4;
     PowerCap-=4;
     }
     if(powerValue==4){
     CostLvl-=5;
     PowerCap-=5;
     }
     if(powerValue==0){
     CostLvl-=1;
     PowerCap-=1;
     if(0>PowerCap){
     CostLvl+=1;
     PowerCap+=1;
     }}
     
     content.elements["power_text"].text=powerValue+"";
     }}
     },
     
     "power_btn_plus": {type:"button",x:900,y:900,bitmap: "btn_right_up",bitmap2:"btn_right_down",scale:3,clicker:{
     onClick: function(container){
     var slot = container.getSlot("tool_slot");
    var content = container.getGuiContent();
        if(powerValue<5) powerValue += 1;
        
     if(powerValue==1){
     CostLvl+=1;
     PowerCap+=1;
     }
     if(powerValue==2){
     CostLvl+=3;
     PowerCap+=3;
     }
     if(powerValue==3){
     CostLvl+=3;
     PowerCap+=3;
     }
     if(powerValue==4){
     CostLvl+=4;
     PowerCap+=4;
     }
     if(powerValue==5){
     CostLvl+=5;
     PowerCap+=5;
     if(16<PowerCap){
     CostLvl-=5;
     PowerCap-=5;
     }}
     
     content.elements["power_text"].text=powerValue+"";
     }}
     },

     "knockback_text": {type:"text",x:845,y:1015,text:knockbackValue+"",font:{color: android.graphics.Color.WHITE,shadow:.6,size:25}},
      
     "knockback": {type:"text",x:400,y:1015,text:Translation.translate("Knockback:"),font:{color: android.graphics.Color.BLACK,shadow:.6,size:25}},

     
     "knockback_btn_minus": {type:"button",x:750,y:1000,bitmap: "btn_left_up",bitmap2:"btn_left_down",scale:3,clicker:{
     onClick: function(container){
     var content = container.getGuiContent();
     var slot = container.getSlot("tool_slot");
     if(knockbackValue>0) knockbackValue -=1;
     
     if(knockbackValue==1){
     CostLvl-=11;
     KnockbackCap-=11;
     }
     if(knockbackValue==0){
     CostLvl-=6;
     KnockbackCap-=6;
     if(0>KnockbackCap){
     CostLvl+=6;
     KnockbackCap+=6;
     }}
     
     content.elements["knockback_text"].text=knockbackValue+"";
     }}
     },
     
     "knockback_btn_plus": {type:"button",x:900,y:1000,bitmap: "btn_right_up",bitmap2:"btn_right_down",scale:3,clicker:{
     onClick: function(container){
     var slot = container.getSlot("tool_slot");
    var content = container.getGuiContent();
        if(knockbackValue<2) knockbackValue += 1;
        
     if(knockbackValue==1){
     CostLvl+=6;
     KnockbackCap+=6;
     }
     if(knockbackValue==2){
     CostLvl+=11;
     KnockbackCap+=11;
     if(17<KnockbackCap){
     CostLvl-=11;
     KnockbackCap-=11;
     }}
      
     content.elements["knockback_text"].text=knockbackValue+"";
     }}
     },

     "flame_text": {type:"text",x:845,y:1115,text:flameValue+"",font:{color: android.graphics.Color.WHITE,shadow:.6,size:25}},
      
     "flame": {type:"text",x:400,y:1115,text:Translation.translate("Flame:"),font:{color: android.graphics.Color.BLACK,shadow:.6,size:25}},

     
     "flame_btn_minus": {type:"button",x:750,y:1100,bitmap: "btn_left_up",bitmap2:"btn_left_down",scale:3,clicker:{
     onClick: function(container){
     var content = container.getGuiContent();
     var slot = container.getSlot("tool_slot");
     if(flameValue>0) flameValue -=1;
     
     if(flameValue==0){
     CostLvl-=11;
     FlameCap-=11;
     if(0>FlameCap){
     CostLvl+=11;
     FlameCap+=11;
     }}
     
     content.elements["flame_text"].text=flameValue+"";
     }}
     },
     
     "flame_btn_plus": {type:"button",x:900,y:1100,bitmap: "btn_right_up",bitmap2:"btn_right_down",scale:3,clicker:{
     onClick: function(container){
     var slot = container.getSlot("tool_slot");
    var content = container.getGuiContent();
        if(flameValue<1) flameValue += 1;
     
     if(flameValue==1){
     CostLvl+=11;
     FlameCap+=11;
     if(11<FlameCap){
     CostLvl-=11;
     FlameCap-=11;;
     }}
     
     content.elements["flame_text"].text=flameValue+"";
     }}
     },

     "punch_text": {type:"text",x:845,y:1215,text:punchValue+"",font:{color: android.graphics.Color.WHITE,shadow:.6,size:25}},
      
     "punch": {type:"text",x:400,y:1215,text:Translation.translate("Punch:"),font:{color: android.graphics.Color.BLACK,shadow:.6,size:25}},

     
     "punch_btn_minus": {type:"button",x:750,y:1200,bitmap: "btn_left_up",bitmap2:"btn_left_down",scale:3,clicker:{
     onClick: function(container){
     var content = container.getGuiContent();
     var slot = container.getSlot("tool_slot");
     if(punchValue>0) punchValue -=1;
     
     if(punchValue==1){
     CostLvl-=8;
     PunchCap-=8;
     }
     if(punchValue==0){
     CostLvl-=6;
     PunchCap-=6;
     if(0>PunchCap){
     CostLvl+=6;
     PunchCap+=6;
     }}
     
     content.elements["punch_text"].text=punchValue+"";
     }}
     },
     
     "punch_btn_plus": {type:"button",x:900,y:1200,bitmap: "btn_right_up",bitmap2:"btn_right_down",scale:3,clicker:{
     onClick: function(container){
     var slot = container.getSlot("tool_slot");
    var content = container.getGuiContent();
        if(punchValue<2) punchValue += 1;
     
     if(punchValue==1){
     CostLvl+=6;
     PunchCap+=6;
     }
     if(punchValue==2){
     CostLvl+=8;
     PunchCap+=8;
     if(14<PunchCap){
     CostLvl-=8;
     PunchCap-=8;
     }}
     
     content.elements["punch_text"].text=punchValue+"";
     }}
     },

     "smite_text": {type:"text",x:845,y:1315,text:smiteValue+"",font:{color: android.graphics.Color.WHITE,shadow:.6,size:25}},
      
     "smite": {type:"text",x:400,y:1315,text:Translation.translate("Smite:"),font:{color: android.graphics.Color.BLACK,shadow:.6,size:25}},

     
     "smite_btn_minus": {type:"button",x:750,y:1300,bitmap: "btn_left_up",bitmap2:"btn_left_down",scale:3,clicker:{
     onClick: function(container){
     var content = container.getGuiContent();
     var slot = container.getSlot("tool_slot");
     if(smite){
     if(smiteValue>0) smiteValue -=1;
     if(smiteValue>0){
     sharpness=false;
     bane=false;
     content.elements["sharpness_text"].text=sharpnessValue+"";
     content.elements["sharpness_text"].font.color=android.graphics.Color.GRAY;
     content.elements["sharpness"].font.color=android.graphics.Color.GRAY;

     content.elements["bane_text"].text=baneValue+"";
     content.elements["bane_text"].font.color=android.graphics.Color.GRAY;
     content.elements["bane"].font.color=android.graphics.Color.GRAY;

     } else {
     sharpness=true;
     bane=true;
     content.elements["sharpness_text"].text=sharpnessValue+"";
     content.elements["sharpness_text"].font.color=android.graphics.Color.WHITE;
     content.elements["sharpness"].font.color=android.graphics.Color.BLACK;

     content.elements["bane_text"].text=baneValue+"";
     content.elements["bane_text"].font.color=android.graphics.Color.WHITE;
content.elements["bane"].font.color=android.graphics.Color.BLACK;

     }
     
     if(smiteValue==1){
     CostLvl-=4;
     SmiteCap-=4;
     }
     if(smiteValue==2){
     CostLvl-=1;
     SmiteCap-=1;
     }
     if(smiteValue==3){
     CostLvl-=6;
     SmiteCap-=6;
     }
     if(smiteValue==4){
     CostLvl-=5;
     SmiteCap-=5;
     }
     if(smiteValue==0){
     CostLvl-=1;
     SmiteCap-=1;
     if(0>SmiteCap){
     CostLvl+=1;
     SmiteCap+=1;
     }}
     
     content.elements["smite_text"].text=smiteValue+"";
     }
     if(!smite){
     smiteValue=0;
     CostLvl-SmiteCap;
     SmiteCap=0;
     content.elements["smite_text"].text=smiteValue+"";
     content.elements["smite_text"].font.color=android.graphics.Color.GRAY;
     }
     
     }}
     },
     
     "smite_btn_plus": {type:"button",x:900,y:1300,bitmap: "btn_right_up",bitmap2:"btn_right_down",scale:3,clicker:{
     onClick: function(container){
     var slot = container.getSlot("tool_slot");
    var content = container.getGuiContent();
    if(smite){
        if(smiteValue<5) smiteValue += 1;
     
     if(smiteValue>0){
     sharpness=false;
     bane=false;
     content.elements["sharpness_text"].text=sharpnessValue+"";
     content.elements["sharpness_text"].font.color=android.graphics.Color.GRAY;
     content.elements["sharpness"].font.color=android.graphics.Color.GRAY;

     content.elements["bane_text"].text=baneValue+"";
     content.elements["bane_text"].font.color=android.graphics.Color.GRAY;
     content.elements["bane"].font.color=android.graphics.Color.GRAY;

     } else {
     sharpness=true;
     bane=true;
     content.elements["sharpness_text"].text=sharpnessValue+"";
     content.elements["sharpness_text"].font.color=android.graphics.Color.WHITE;
     content.elements["sharpness"].font.color=android.graphics.Color.BLACK;

     content.elements["bane_text"].text=baneValue+"";
     content.elements["bane_text"].font.color=android.graphics.Color.WHITE;
     content.elements["bane"].font.color=android.graphics.Color.BLACK;
     

     }
     
     if(smiteValue==1){
     CostLvl+=1;
     SmiteCap+=1;
     }
     if(smiteValue==2){
     CostLvl+=4;
     SmiteCap+=4;
     }
     if(smiteValue==3){
     CostLvl+=1;
     SmiteCap+=1;
     }
     if(smiteValue==4){
     CostLvl+=6;
     SmiteCap+=6;
     }
     if(smiteValue==5){
     CostLvl+=5;
     SmiteCap+=5;
     if(17<SmiteCap){
     CostLvl-=5;
     SmiteCap-=5;
     }}
     
     content.elements["smite_text"].text=smiteValue+"";
     }
     if(!smite){
     smiteValue=0;
     CostLvl-SmiteCap;
     SmiteCap=0;
     content.elements["smite_text"].text=smiteValue+"";
     content.elements["smite_text"].font.color=android.graphics.Color.GRAY;
     }
     
     }}
     },

     "bane_text": {type:"text",x:845,y:1415,text:baneValue+"",font:{color: android.graphics.Color.WHITE,shadow:.6,size:25}},
      
     "bane": {type:"text",x:400,y:1415,text:Translation.translate("Bane Of Arthropods:"),font:{color: android.graphics.Color.BLACK,shadow:.6,size:25}},

     
     "bane_btn_minus": {type:"button",x:750,y:1400,bitmap: "btn_left_up",bitmap2:"btn_left_down",scale:3,clicker:{
     onClick: function(container){
     var content = container.getGuiContent();
     var slot = container.getSlot("tool_slot");
     if(bane){
     if(baneValue>0) baneValue -=1;
     
     if(baneValue>0){
     sharpness=false;
     smite=false;
     content.elements["sharpness_text"].text=sharpnessValue+"";
     content.elements["sharpness_text"].font.color=android.graphics.Color.GRAY;
     content.elements["sharpness"].font.color=android.graphics.Color.GRAY;

     content.elements["smite_text"].text=smiteValue+"";
     content.elements["smite_text"].font.color=android.graphics.Color.GRAY;
     content.elements["smite"].font.color=android.graphics.Color.GRAY;

     } else {
     sharpness=true;
     smite=true;
     content.elements["sharpness_text"].text=sharpnessValue+"";
     content.elements["sharpness_text"].font.color=android.graphics.Color.WHITE;
     content.elements["sharpness"].font.color=android.graphics.Color.BLACK;

     content.elements["smite_text"].text=smiteValue+"";
     content.elements["smite_text"].font.color=android.graphics.Color.WHITE;
     content.elements["smite"].font.color=android.graphics.Color.BLACK;

     }

     
     if(baneValue==1){
     CostLvl-=4;
     BaneCap-=4;
     }
     if(baneValue==2){
     CostLvl-=1;
     BaneCap-=1;
     }
     if(baneValue==3){
     CostLvl-=6;
     BaneCap-=6;
     }
     if(baneValue==4){
     CostLvl-=5;
     BaneCap-=5;
     }
     if(baneValue==0){
     CostLvl-=1;
     BaneCap-=1;
     if(0>BaneCap){
     CostLvl+=1;
     BaneCap+=1;
     }}
     
     content.elements["bane_text"].text=baneValue+"";
     }
     if(!bane){
     baneValue=0;
     CostLvl-BaneCap;
     BaneCap=0;
     content.elements["bane_text"].text=baneValue+"";
     content.elements["bane_text"].font.color=android.graphics.Color.GRAY;
     }
     
     }}
     },
     
     "bane_btn_plus": {type:"button",x:900,y:1400,bitmap: "btn_right_up",bitmap2:"btn_right_down",scale:3,clicker:{
     onClick: function(container){
     var slot = container.getSlot("tool_slot");
    var content = container.getGuiContent();
    if(bane){
        if(baneValue<5) baneValue += 1;
     
     if(baneValue>0){
     sharpness=false;
     smite=false;
     content.elements["sharpness_text"].text=sharpnessValue+"";
     content.elements["sharpness_text"].font.color=android.graphics.Color.GRAY;
     content.elements["sharpness"].font.color=android.graphics.Color.GRAY;

     content.elements["smite_text"].text=smiteValue+"";
     content.elements["smite_text"].font.color=android.graphics.Color.GRAY;
     content.elements["smite"].font.color=android.graphics.Color.GRAY;

     } else {
     sharpness=true;
     smite=true;
     content.elements["sharpness_text"].text=sharpnessValue+"";
     content.elements["sharpness_text"].font.color=android.graphics.Color.WHITE;
     content.elements["sharpness"].font.color=android.graphics.Color.BLACK;

     content.elements["smite_text"].text=smiteValue+"";
     content.elements["smite_text"].font.color=android.graphics.Color.WHITE;
     content.elements["smite"].font.color=android.graphics.Color.BLACK;

     }

     
     if(baneValue==1){
     CostLvl+=1;
     BaneCap+=1;
     }
     if(baneValue==2){
     CostLvl+=4;
     BaneCap+=4;
     }
     if(baneValue==3){
     CostLvl+=1;
     BaneCap+=1;
     }
     if(baneValue==4){
     CostLvl+=6;
     BaneCap+=6;
     }
     if(baneValue==5){
     CostLvl+=5;
     BaneCap+=5;
     if(17<BaneCap){
     CostLvl-=5;
     BaneCap-=5;
     }}
 
     content.elements["bane_text"].text=baneValue+"";
     }
     if(!bane){
     baneValue=0;
     CostLvl-BaneCap;
     BaneCap=0;
     content.elements["bane_text"].text=baneValue+"";
     content.elements["bane_text"].font.color=android.graphics.Color.GRAY;
     }
     
     }}
     }

      
   }

});

/*epGUI.content.elements["disEnc"] = {type: "button", x:700,y:100,scale:5,bitmap:"disench_button_up",bitmap2:"disench_button_down",clicker:{
onClick: function(container){
var content = container.getGuiContent();
var slot = container.getSlot("tool_slot");
/*var extra = slot.id.extra;
if(!extra){
extra = new ItemExtraData();
slot.id.extra = extra;
}
var LootType = extra.getInt("lootType");
var LootLevel = extra.getInt("lootLevel");
//if(extra.getEnchantName(LootType,LootLevel)|extra.getEnchantName(LootType,LootLevel)==Native.Enchantment.LOOTING){
if(slot.id){
if(ToolAPI.getEnchantExtraData(LootType,LootLevel)){
Game.message("хуй")

Player.setCarriedItem(slot.id,1,slot.data);
container.clearSlot("tool_slot");
container.validateSlot("tool_slot");
Player.setLevel(Player.getLevel()+LootLevel);
}}

}}}*/

epGUI.content.elements["encBtn"] = {type: "button", x:500,y:100,scale:5,bitmap:"ench_button_up",bitmap2:"ench_button_down",clicker:{
onClick: function(container){
var content = container.getGuiContent();
var slot = container.getSlot("tool_slot");
var extra = slot.id.extra;
if(!extra){
extra = new ItemExtraData();
}
var Looting = {type: Native.Enchantment.LOOTING, level:lootValue};
//var Looting = {type: 14, level:lootValue};
//extra.putInt("lootType",Looting.type);
//extra.putInt("lootLevel",Looting.type);
var Unbreaking = {type:Native.Enchantment.UNBREAKING, level:unbreakValue};
var Efficiency = {type:Native.Enchantment.EFFICIENCY, level:efficiencyValue};
var Fortune = {type:Native.Enchantment.FORTUNE, level:fortuneValue};
var SilkTouch = {type:Native.Enchantment.SILK_TOUCH, level:silkTouchValue};
var FireAspect = {type:Native.Enchantment.FIRE_ASPECT, level:fireAspectValue};
var Sharpness = {type:Native.Enchantment.SHARPNESS, level:sharpnessValue};
var Infinity = {type:Native.Enchantment.INFINITY, level:infinityValue};
var Power = {type:Native.Enchantment.POWER, level:powerValue};
var Knockback = {type:Native.Enchantment.KNOCKBACK, level:knockbackValue};
var Flame = {type:Native.Enchantment.FLAME, level:flameValue};
var Punch = {type:Native.Enchantment.PUNCH, level:punchValue};
var Smite = {type:Native.Enchantment.SMITE, level:smiteValue};
var Bane = {type:Native.Enchantment.BANE_OF_ARTHROPODS, level:baneValue};

if(Looting.level!=0) extra.addEnchant(Looting.type,Looting.level);
if(Unbreaking.level!=0) extra.addEnchant(Unbreaking.type,Unbreaking.level);
if(Efficiency.level!=0) extra.addEnchant(Efficiency.type,Efficiency.level);
if(Fortune.level!=0) extra.addEnchant(Fortune.type,Fortune.level);
if(SilkTouch.level!=0) extra.addEnchant(SilkTouch.type,SilkTouch.level);
if(FireAspect.level!=0) extra.addEnchant(FireAspect.type,FireAspect.level);
if(Sharpness.level!=0) extra.addEnchant(Sharpness.type,Sharpness.level);
if(Infinity.level!=0) extra.addEnchant(Infinity.type,Infinity.level);
if(Power.level!=0) extra.addEnchant(Power.type,Power.level);
if(Knockback.level!=0) extra.addEnchant(Knockback.type,Knockback.level);
if(Flame.level!=0) Flame.addEnchant(Flame.type,Flame.level);
if(Punch.level!=0) extra.addEnchant(Punch.type,Punch.level);
if(Smite.level!=0) extra.addEnchant(Smite.type,Smite.level);
if(Bane.level!=0) extra.addEnchant(Bane.type,Bane.level);
if(DenyLvl>=CostLvl){
if(Player.getLevel()>=CostLvl){
if(slot.id){
Entity.setCarriedItem(Player.get(),slot.id,1,slot.data,extra);
container.clearSlot("tool_slot")
container.validateSlot("tool_slot");
Player.setLevel(Player.getLevel()-CostLvl);
}}}
}}}

epGUI.content.elements["repair_button"] = {type: "button", x: 600, y: 100, scale:5, bitmap: "repair_button_up",bitmap2:"repair_button_down", clicker: {
onClick: function(container){
var slot = container.getSlot("tool_slot");
if(Player.getLevel()>=CostLvl){
if(slot.data>0&&slot.data<100){
container.setSlot("tool_slot",slot.id,1,0);
Player.setLevel(Player.getLevel()-repairCost);
}
if(slot.data>=100&&slot.data<500){
container.setSlot("tool_slot",slot.id,1,0);
Player.setLevel(Player.getLevel()-repairCost-5);
}
if(slot.data>=500&&slot.data<=1000){
container.setSlot("tool_slot",slot.id,1,0);
Player.setLevel(Player.getLevel()-repairCost-10);
}
if(slot.data>1000){
container.setSlot("tool_slot",slot.id,1,0);
Player.setLevel(Player.getLevel()-repairCost-15);
}}}
}}


epGUI.content.elements["lvl"] = {type: "text", x: 400, y: 50, scale:5,text:"Need lvl: "+CostLvl,font:{color: android.graphics.Color.WHITE,shadow:.6,size:25}}
epGUI.content.elements["maxLvl"] = {type: "text", x: 600, y: 50, scale:5,text:"Max Enc. lvl: "+DenyLvl,font:{color: android.graphics.Color.WHITE,shadow:.6,size:25}}


var protectionValue=0;
var fireProtValue=0;
var blastProtValue=0;
var featherValue=0;
var respirationValue=0;
var aquaAffinityValue=0;
var thornsValue=0;
var depthStriderValue=0;
var projectileProtValue=0;

var protectionCap=0;
var fireProtCap=0;
var blastProtCap=0;
var featherCap=0;
var respirationCap=0;
var aquaAffinityCap=0;
var thornsCap=0;
var depthStriderCap=0;
var projectileProtCap=0;

var epGUI_2 = new UI.StandartWindow({
standart: {
       header: {
          text: { 
          text: Translation.translate("Advanced Enchantment Table")  
          }

        },
          inventory: {
          standart: true

          },

          background: {
          standart: true

          },
          minHeight: 1200

         },

     drawing: [],

     elements: {

     "protection_text": {type:"text",x:845,y:215,text:protectionValue+"",font:{color: android.graphics.Color.WHITE,shadow:.6,size:25}},
      
     "protection": {type:"text",x:400,y:215,text:Translation.translate("Protection:"),font:{color: android.graphics.Color.BLACK,shadow:.6,size:25}},

     
     "protection_btn_minus": {type:"button",x:750,y:200,bitmap: "btn_left_up",bitmap2:"btn_left_down",scale:3,clicker:{
     onClick: function(container){
     var content = container.getGuiContent();
     var slot = container.getSlot("tool_slot");
     if(protection){
     if(protectionValue>0) protectionValue -=1;
     
     if(protectionValue>0){
     fireProtection=false;
     blastProtection=false;
     projectileProtection=false;
     content.elements["fireProt_text"].text=smiteValue+"";
     content.elements["fireProt_text"].font.color=android.graphics.Color.GRAY;
     content.elements["fireProt"].font.color=android.graphics.Color.GRAY;

     content.elements["blastProt_text"].text=smiteValue+"";
     content.elements["blastProt_text"].font.color=android.graphics.Color.GRAY;
     content.elements["blastProt"].font.color=android.graphics.Color.GRAY;

     content.elements["projectileProt_text"].text=smiteValue+"";
     content.elements["projectileProt_text"].font.color=android.graphics.Color.GRAY;
     content.elements["projectileProt"].font.color=android.graphics.Color.GRAY;
     } else {
     fireProtection=true;
     blastProtection=true;
     projectileProtection=true;
     content.elements["fireProt_text"].text=fireProtValue+"";
     content.elements["fireProt_text"].font.color=android.graphics.Color.WHITE;
     content.elements["fireProt"].font.color=android.graphics.Color.BLACK;

     content.elements["blastProt_text"].text=blastProtValue+"";
     content.elements["blastProt_text"].font.color=android.graphics.Color.WHITE;
     content.elements["blastProt"].font.color=android.graphics.Color.BLACK;

     content.elements["projectileProt_text"].text=projectileProtValue+"";
     content.elements["projectileProt_text"].font.color=android.graphics.Color.WHITE;
     content.elements["projectileProt"].font.color=android.graphics.Color.BLACK;
     }

     if(protectionValue==1){
     CostLvl-=4;
     protectionCap-=4;
     }
     if(protectionValue==2){
     CostLvl-=4;
     protectionCap-=4;
     }
     if(protectionValue==3){
     CostLvl-=5;
     protectionCap-=5;
     }
     if(protectionValue==0){
     CostLvl-=1;
     protectionCap-=1;
     if(0>protectionCap){
     CostLvl+=1;
     protectionCap+=1;
     }}
     
     content.elements["protection_text"].text = protectionValue+"";
     }
     if(!protection){
     protectionValue=0;
     protectionCap=0;
     content.elements["protection_text"].text=protectionValue+"";
     content.elements["protection_text"].font.color=android.graphics.Color.GRAY;
     }
     
     }}
     },
     
     "protection_btn_plus": {type:"button",x:900,y:200,bitmap: "btn_right_up",bitmap2:"btn_right_down",scale:3,clicker:{
     onClick: function(container){
     var slot = container.getSlot("tool_slot");
    var content = container.getGuiContent();
    if(protection){
    if(protectionValue<4) protectionValue += 1;
     if(protectionValue>0){
     
     fireProtection=false;
     blastProtection=false;
     projectileProtection=false;
     content.elements["fireProt_text"].text=fireProtValue+"";
     content.elements["fireProt_text"].font.color=android.graphics.Color.GRAY;
     content.elements["fireProt"].font.color=android.graphics.Color.GRAY;

     content.elements["blastProt_text"].text=blastProtValue+"";
     content.elements["blastProt_text"].font.color=android.graphics.Color.GRAY;
     content.elements["blastProt"].font.color=android.graphics.Color.GRAY;

     content.elements["projectileProt_text"].text=projectileProtValue+"";
     content.elements["projectileProt_text"].font.color=android.graphics.Color.GRAY;
     content.elements["projectileProt"].font.color=android.graphics.Color.GRAY;
     } else {
     fireProtection=true;
     blastProtection=true;
     projectileProtection=true;
     content.elements["fireProt_text"].text=fireProtValue+"";
     content.elements["fireProt_text"].font.color=android.graphics.Color.WHITE;
     content.elements["fireProt"].font.color=android.graphics.Color.BLACK;

     content.elements["blastProt_text"].text=blastProtValue+"";
     content.elements["blastProt_text"].font.color=android.graphics.Color.WHITE;
     content.elements["blastProt"].font.color=android.graphics.Color.BLACK;

     content.elements["projectileProt_text"].text=projectileProtValue+"";
     content.elements["projectileProt_text"].font.color=android.graphics.Color.WHITE;
     content.elements["projectileProt"].font.color=android.graphics.Color.BLACK;
     }
     
     if(protectionValue==1){
     CostLvl+=1;
     protectionCap+=1;
     }
     if(protectionValue==2){
     CostLvl+=4;
     protectionCap+=4;
     }
     if(protectionValue==3){
     CostLvl+=4;
     protectionCap+=4;
     }
     if(protectionValue==4){
     CostLvl+=5;
     protectionCap+=5;
     if(14<protectionCap){
     CostLvl-=5;
     protectionCap-=5;
     }}
 
 
     content.elements["protection_text"].text = protectionValue+"";
     }
     if(!protection){
     protectionValue=0;
     protectionCap=0;
     content.elements["protection_text"].text=protectionValue+"";
     content.elements["protection_text"].font.color=android.graphics.Color.GRAY;
     }
     
     }}
     },
     
     "fireProt_text": {type:"text",x:845,y:315,text:fireProtValue+"",font:{color: android.graphics.Color.WHITE,shadow:.6,size:25}},
      
     "fireProt": {type:"text",x:400,y:315,text:Translation.translate("Fire Protection:"),font:{color: android.graphics.Color.BLACK,shadow:.6,size:25}},

     
     "fireProt_btn_minus": {type:"button",x:750,y:300,bitmap: "btn_left_up",bitmap2:"btn_left_down",scale:3,clicker:{
     onClick: function(container){
     var content = container.getGuiContent();
     var slot = container.getSlot("tool_slot");
     if(fireProtection){
     if(fireProtValue>0) fireProtValue -=1;
     if(fireProtValue>0){
     
     protection=false;
     blastProtection=false;
     projectileProtection=false;
     content.elements["protection_text"].text=protectionValue+"";
     content.elements["protection_text"].font.color=android.graphics.Color.GRAY;
     content.elements["protection"].font.color=android.graphics.Color.GRAY;

     content.elements["blastProt_text"].text=blastProtValue+"";
     content.elements["blastProt_text"].font.color=android.graphics.Color.GRAY;
     content.elements["blastProt"].font.color=android.graphics.Color.GRAY;

     content.elements["projectileProt_text"].text=projectileProtValue+"";
     content.elements["projectileProt_text"].font.color=android.graphics.Color.GRAY;
     content.elements["projectileProt"].font.color=android.graphics.Color.GRAY;
     } else {
     protection=true;
     blastProtection=true;
     projectileProtection=true;
     content.elements["protection_text"].text=protectionValue+"";
     content.elements["protection_text"].font.color=android.graphics.Color.WHITE;
     content.elements["protection"].font.color=android.graphics.Color.BLACK;

     content.elements["blastProt_text"].text=blastProtValue+"";
     content.elements["blastProt_text"].font.color=android.graphics.Color.WHITE;
     content.elements["blastProt"].font.color=android.graphics.Color.BLACK;

     content.elements["projectileProt_text"].text=projectileProtValue+"";
     content.elements["projectileProt_text"].font.color=android.graphics.Color.WHITE;
     content.elements["projectileProt"].font.color=android.graphics.Color.BLACK;
     }
     
     if(fireProtValue==1){
     CostLvl-=2;
     fireProtCap-=2;
     }
     if(fireProtValue==2){
     CostLvl-=4;
     fireProtCap-=4;
     }
     if(fireProtValue==3){
     CostLvl-=5;
     fireProtCap-=5;
     }
     if(fireProtValue==0){
     CostLvl-=3;
     fireProtCap-=3;
     if(0>fireProtCap){
     CostLvl+=3;
     fireProtCap+=3;
     }}
     
     content.elements["fireProt_text"].text = fireProtValue+"";
     }
     if(!fireProtection){
     fireProtValue=0;
     fireProtCap=0;
     content.elements["fireProt_text"].text=fireProtValue+"";
     content.elements["fireProt_text"].font.color=android.graphics.Color.GRAY;
     }
     
     }}
     },
     
     "fireProt_btn_plus": {type:"button",x:900,y:300,bitmap: "btn_right_up",bitmap2:"btn_right_down",scale:3,clicker:{
     onClick: function(container){
     var slot = container.getSlot("tool_slot");
    var content = container.getGuiContent();
    if(fireProtection){
        if(fireProtValue<4) fireProtValue += 1;
        if(fireProtValue>0){
     
     protection=false;
     blastProtection=false;
     projectileProtection=false;
     content.elements["protection_text"].text=protectionValue+"";
     content.elements["protection_text"].font.color=android.graphics.Color.GRAY;
     content.elements["protection"].font.color=android.graphics.Color.GRAY;

     content.elements["blastProt_text"].text=blastProtValue+"";
     content.elements["blastProt_text"].font.color=android.graphics.Color.GRAY;
     content.elements["blastProt"].font.color=android.graphics.Color.GRAY;

     content.elements["projectileProt_text"].text=projectileProtValue+"";
     content.elements["projectileProt_text"].font.color=android.graphics.Color.GRAY;
     content.elements["projectileProt"].font.color=android.graphics.Color.GRAY;
     } else {
     protection=true;
     blastProtection=true;
     projectileProtection=true;
     content.elements["protection_text"].text=protectionValue+"";
     content.elements["protection_text"].font.color=android.graphics.Color.WHITE;
     content.elements["protection"].font.color=android.graphics.Color.BLACK;

     content.elements["blastProt_text"].text=blastProtValue+"";
     content.elements["blastProt_text"].font.color=android.graphics.Color.WHITE;
     content.elements["blastProt"].font.color=android.graphics.Color.BLACK;

     content.elements["projectileProt_text"].text=projectileProtValue+"";
     content.elements["projectileProt_text"].font.color=android.graphics.Color.WHITE;
     content.elements["projectileProt"].font.color=android.graphics.Color.BLACK;
     }
     
     if(fireProtValue==1){
     CostLvl+=3;
     fireProtCap+=3;
     }
     if(fireProtValue==2){
     CostLvl+=2;
     fireProtCap+=2;
     }
     if(fireProtValue==3){
     CostLvl+=4;
     fireProtCap+=4;
     }
     if(fireProtValue==4){
     CostLvl+=5;
     fireProtCap+=5;
     if(14<fireProtCap){
     CostLvl-=5;
     fireProtCap-=5;
     }}
     
     content.elements["fireProt_text"].text = fireProtValue+"";
     }
     if(!fireProtection){
     fireProtValue=0;
     fireProtCap=0;
     content.elements["fireProt_text"].text=fireProtValue+"";
     content.elements["fireProt_text"].font.color=android.graphics.Color.GRAY;
     }
 
     }}
     },

     "blastProt_text": {type:"text",x:845,y:415,text:blastProtValue+"",font:{color: android.graphics.Color.WHITE,shadow:.6,size:25}},
      
     "blastProt": {type:"text",x:400,y:415,text:Translation.translate("Blast Protection:"),font:{color: android.graphics.Color.BLACK,shadow:.6,size:25}},

     
     "blastProt_btn_minus": {type:"button",x:750,y:400,bitmap: "btn_left_up",bitmap2:"btn_left_down",scale:3,clicker:{
     onClick: function(container){
     var content = container.getGuiContent();
     var slot = container.getSlot("tool_slot");
     if(blastProtection){
     if(blastProtValue>0) blastProtValue -=1;
     
     if(blastProtValue>0){
     
     protection=false;
     fireProtection=false;
     projectileProtection=false;
     content.elements["protection_text"].text=protectionValue+"";
     content.elements["protection_text"].font.color=android.graphics.Color.GRAY;
     content.elements["protection"].font.color=android.graphics.Color.GRAY;

     content.elements["fireProt_text"].text=fireProtValue+"";
     content.elements["fireProt_text"].font.color=android.graphics.Color.GRAY;
     content.elements["fireProt"].font.color=android.graphics.Color.GRAY;

     content.elements["projectileProt_text"].text=projectileProtValue+"";
     content.elements["projectileProt_text"].font.color=android.graphics.Color.GRAY;
     content.elements["projectileProt"].font.color=android.graphics.Color.GRAY;
     } else {
     protection=true;
     fireProtection=true;
     projectileProtection=true;
     content.elements["protection_text"].text=protectionValue+"";
     content.elements["protection_text"].font.color=android.graphics.Color.WHITE;
     content.elements["protection"].font.color=android.graphics.Color.BLACK;

     content.elements["fireProt_text"].text=fireProtValue+"";
     content.elements["fireProt_text"].font.color=android.graphics.Color.WHITE;
     content.elements["fireProt"].font.color=android.graphics.Color.BLACK;

     content.elements["projectileProt_text"].text=projectileProtValue+"";
     content.elements["projectileProt_text"].font.color=android.graphics.Color.WHITE;
     content.elements["projectileProt"].font.color=android.graphics.Color.BLACK;
     }
     
     if(blastProtValue==1){
     CostLvl-=2;
     blastProtCap-=2;
     }
     if(blastProtValue==2){
     CostLvl-=3;
     blastProtCap-=3;
     }
     if(blastProtValue==3){
     CostLvl-=6;
     blastProtCap-=6;
     }
     if(blastProtValue==0){
     CostLvl-=1;
     blastProtCap-=1;
     if(0>blastProtCap){
     CostLvl+=1;
     blastProtCap+=1;
     }}
     
     content.elements["blastProt_text"].text = blastProtValue+"";
     }
     if(!blastProtection){
     blastProtValue=0;
     blastProtCap=0;
     content.elements["blastProt_text"].text=blastProtValue+"";
     content.elements["blastProt_text"].font.color=android.graphics.Color.GRAY;
     }
     
     }}
     },
     
     "blastProt_btn_plus": {type:"button",x:900,y:400,bitmap: "btn_right_up",bitmap2:"btn_right_down",scale:3,clicker:{
     onClick: function(container){
     var slot = container.getSlot("tool_slot");
    var content = container.getGuiContent();
    if(blastProtection){
        if(blastProtValue<4) blastProtValue += 1;
     
     if(blastProtValue>0){
     
     protection=false;
     fireProtection=false;
     projectileProtection=false;
     content.elements["protection_text"].text=protectionValue+"";
     content.elements["protection_text"].font.color=android.graphics.Color.GRAY;
     content.elements["protection"].font.color=android.graphics.Color.GRAY;

     content.elements["fireProt_text"].text=fireProtValue+"";
     content.elements["fireProt_text"].font.color=android.graphics.Color.GRAY;
     content.elements["fireProt"].font.color=android.graphics.Color.GRAY;

     content.elements["projectileProt_text"].text=projectileProtValue+"";
     content.elements["projectileProt_text"].font.color=android.graphics.Color.GRAY;
     content.elements["projectileProt"].font.color=android.graphics.Color.GRAY;
     } else {
     protection=true;
     fireProtection=true;
     projectileProtection=true;
     content.elements["protection_text"].text=protectionValue+"";
     content.elements["protection_text"].font.color=android.graphics.Color.WHITE;
     content.elements["protection"].font.color=android.graphics.Color.BLACK;

     content.elements["fireProt_text"].text=fireProtValue+"";
     content.elements["fireProt_text"].font.color=android.graphics.Color.WHITE;
     content.elements["fireProt"].font.color=android.graphics.Color.BLACK;

     content.elements["projectileProt_text"].text=projectileProtValue+"";
     content.elements["projectileProt_text"].font.color=android.graphics.Color.WHITE;
     content.elements["projectileProt"].font.color=android.graphics.Color.BLACK;
     }
     
     if(blastProtValue==1){
     CostLvl+=1;
     blastProtCap+=1;
     }
     if(blastProtValue==2){
     CostLvl+=2;
     blastProtCap+=2;
     }
     if(blastProtValue==3){
     CostLvl+=3;
     blastProtCap+=3;
     }
     if(blastProtValue==4){
     CostLvl+=6;
     blastProtCap+=6;
     if(12<blastProtCap){
     CostLvl-=6;
     blastProtCap-=6;
     }}
     
     content.elements["blastProt_text"].text = blastProtValue+"";
     }
     if(!blastProtection){
     blastProtValue=0;
     blastProtCap=0;
     content.elements["blastProt_text"].text=blastProtValue+"";
     content.elements["blastProt_text"].font.color=android.graphics.Color.GRAY;
     }
 
     }}
     },
     
     "feather_text": {type:"text",x:845,y:515,text:featherValue+"",font:{color: android.graphics.Color.WHITE,shadow:.6,size:25}},
            
     "feather": {type:"text",x:400,y:515,text:Translation.translate("Feather Falling:"),font:{color: android.graphics.Color.BLACK,shadow:.6,size:25}},

     "feather_btn_minus": {type:"button",x:750,y:500,bitmap: "btn_left_up",bitmap2:"btn_left_down",scale:3,clicker:{
     onClick: function(container){
     var content = container.getGuiContent();
     var slot = container.getSlot("tool_slot");
     if(featherValue>0) featherValue -=1;
     
     if(featherValue==1){
     CostLvl-=2;
     featherCap-=2;
     }
     if(featherValue==2){
     CostLvl-=2;
     featherCap-=2;
     }
     if(featherValue==3){
     CostLvl-=4;
     featherCap-=4;
     }
     if(featherValue==0){
     CostLvl-=1;
     featherCap-=1;
     if(0>featherCap){
     CostLvl+=1;
     featherCap+=1;
     }}
     
     content.elements["feather_text"].text = featherValue+"";
     }}
     },
     
     "feather_btn_plus": {type:"button",x:900,y:500,bitmap: "btn_right_up",bitmap2:"btn_right_down",scale:3,clicker:{
     onClick: function(container){
     var slot = container.getSlot("tool_slot");
    var content = container.getGuiContent();
        if(featherValue<4) featherValue += 1;
     
     if(featherValue==1){
     CostLvl+=1;
     featherCap+=1;
     }
     if(featherValue==2){
     CostLvl+=2;
     featherCap+=2;
     }
     if(featherValue==3){
     CostLvl+=2;
     featherCap+=2;
     }
     if(featherValue==4){
     CostLvl+=4;
     featherCap+=4;
     if(9<featherCap){
     CostLvl-=4;
     featherCap-=4;
     }}
     
     content.elements["feather_text"].text = featherValue+"";
     }}
     },
     

     "respiration_text": {type:"text",x:845,y:615,text:respirationValue+"",font:{color: android.graphics.Color.WHITE,shadow:.6,size:25}},
      
     "respiration": {type:"text",x:400,y:615,text:Translation.translate("Respiration:"),font:{color: android.graphics.Color.BLACK,shadow:.6,size:25}},

     
     "respiration_btn_minus": {type:"button",x:750,y:600,bitmap: "btn_left_up",bitmap2:"btn_left_down",scale:3,clicker:{
     onClick: function(container){
     var content = container.getGuiContent();
     var slot = container.getSlot("tool_slot");
     if(respirationValue>0) respirationValue -=1;
     
     if(respirationValue==1){
     CostLvl-=4;
     respirationCap-=4;
     }
     if(respirationValue==2){
     CostLvl-=8;
     respirationCap-=8;
     }
     if(respirationValue==0){
     CostLvl-=5;
     respirationCap-=5;
     if(0>respirationCap){
     CostLvl+=5;
     respirationCap+=5;
     }}
     
     content.elements["respiration_text"].text = respirationValue+"";
     }}
     },
     
     "respiration_btn_plus": {type:"button",x:900,y:600,bitmap: "btn_right_up",bitmap2:"btn_right_down",scale:3,clicker:{
     onClick: function(container){
     var slot = container.getSlot("tool_slot");
    var content = container.getGuiContent();
        if(respirationValue<3) respirationValue += 1;
     
     if(respirationValue==1){
     CostLvl+=5;
     respirationCap+=5;
     }
     if(respirationValue==2){
     CostLvl+=4;
     respirationCap+=4;
     }
     if(respirationValue==3){
     CostLvl+=8;
     respirationCap+=8;
     if(17<respirationCap){
     CostLvl-=8;
     respirationCap-=8;
     }}
     
     content.elements["respiration_text"].text = respirationValue+"";
     }}
     },

     "aquaAffinity_text": {type:"text",x:845,y:715,text:aquaAffinityValue+"",font:{color: android.graphics.Color.WHITE,shadow:.6,size:25}},
      
     "aquaAffinity": {type:"text",x:400,y:715,text:Translation.translate("Aqua Affinity:"),font:{color: android.graphics.Color.BLACK,shadow:.6,size:25}},

     
     "aquaAffinity_btn_minus": {type:"button",x:750,y:700,bitmap: "btn_left_up",bitmap2:"btn_left_down",scale:3,clicker:{
     onClick: function(container){
     var content = container.getGuiContent();
     var slot = container.getSlot("tool_slot");
     if(aquaAffinityValue>0) aquaAffinityValue -=1;
     
     if(aquaAffinityValue==0){
     CostLvl-=6;
     aquaAffinityCap-=6;
     if(0>aquaAffinityCap){
     CostLvl+=6;
     aquaAffinityCap+=6;
     }}
     
     content.elements["aquaAffinity_text"].text = aquaAffinityValue+"";
     }}
     },
     
     "aquaAffinity_btn_plus": {type:"button",x:900,y:700,bitmap: "btn_right_up",bitmap2:"btn_right_down",scale:3,clicker:{
     onClick: function(container){
     var slot = container.getSlot("tool_slot");
    var content = container.getGuiContent();
        if(aquaAffinityValue<1) aquaAffinityValue += 1;
     
     if(aquaAffinityValue==1){
     CostLvl+=6;
     aquaAffinityCap+=6;
     if(6<aquaAffinityCap){
     CostLvl-=6;
     aquaAffinityCap-=6;
     }}
     
     content.elements["aquaAffinity_text"].text = aquaAffinityValue+"";
     }}
     },

     "thorns_text": {type:"text",x:845,y:815,text:thornsValue+"",font:{color: android.graphics.Color.WHITE,shadow:.6,size:25}},
      
     "thorns": {type:"text",x:400,y:815,text:Translation.translate("Thorns:"),font:{color: android.graphics.Color.BLACK,shadow:.6,size:25}},
  
     "thorns_btn_minus": {type:"button",x:750,y:800,bitmap: "btn_left_up",bitmap2:"btn_left_down",scale:3,clicker:{
     onClick: function(container){
     var content = container.getGuiContent();
     var slot = container.getSlot("tool_slot");
     if(thornsValue>0) thornsValue -=1;
     
     if(thornsValue==1){
     CostLvl-=8;
     thornsCap-=8;
     }
     if(thornsValue==2){
     CostLvl-=10;
     thornsCap-=10;
     }
     if(thornsValue==0){
     CostLvl-=6;
     thornsCap-=6;
     if(0>thornsCap){
     CostLvl+=6;
     thornsCap+=6;
     }}
     
     content.elements["thorns_text"].text = thornsValue+"";
     }}
     },
     
     "thorns_btn_plus": {type:"button",x:900,y:800,bitmap: "btn_right_up",bitmap2:"btn_right_down",scale:3,clicker:{
     onClick: function(container){
     var slot = container.getSlot("tool_slot");
    var content = container.getGuiContent();
        if(thornsValue<3) thornsValue += 1;
     
     if(thornsValue==1){
     CostLvl+=6;
     thornsCap+=6;
     }
     if(thornsValue==2){
     CostLvl+=8;
     thornsCap+=8;
     }
     if(thornsValue==3){
     CostLvl+=10;
     thornsCap+=10;
     if(24<thornsCap){
     CostLvl-=10;
     thornsCap-=10;
     }}
     
     content.elements["thorns_text"].text = thornsValue+"";
     }}
     },
     
     "depthStrider_text": {type:"text",x:845,y:915,text:depthStriderValue+"",font:{color: android.graphics.Color.WHITE,shadow:.6,size:25}},
      
     "depthStrider": {type:"text",x:400,y:915,text:Translation.translate("Depth Strider:"),font:{color: android.graphics.Color.BLACK,shadow:.6,size:25}},
     
     "depthStrider_btn_minus": {type:"button",x:750,y:900,bitmap: "btn_left_up",bitmap2:"btn_left_down",scale:3,clicker:{
     onClick: function(container){
     var content = container.getGuiContent();
     var slot = container.getSlot("tool_slot");
     if(depthStriderValue>0) depthStriderValue -=1;
     
     if(depthStriderValue==1){
     CostLvl-=4;
     depthStriderCap-=4;
     }
     if(depthStriderValue==2){
     CostLvl-=6;
     depthStriderCap-=6;
     }
     if(depthStriderValue==0){
     CostLvl-=16;
     depthStriderCap-=16;
     if(0>depthStriderCap){
     CostLvl+=16;
     depthStriderCap+=16;
     }}
     
     content.elements["depthStrider_text"].text = depthStriderValue+"";
     }}
     },
     
     "depthStrider_btn_plus": {type:"button",x:900,y:900,bitmap: "btn_right_up",bitmap2:"btn_right_down",scale:3,clicker:{
     onClick: function(container){
     var slot = container.getSlot("tool_slot");
    var content = container.getGuiContent();
        if(depthStriderValue<3) depthStriderValue += 1;
     
     if(depthStriderValue==1){
     CostLvl+=16;
     depthStriderCap+=16;
     }
     if(depthStriderValue==2){
     CostLvl+=4;
     depthStriderCap+=4;
     }
     if(depthStriderValue==3){
     CostLvl+=6;
     depthStriderCap+=6;
     if(26<depthStriderCap){
     CostLvl-=6;
     depthStriderCap-=6;
     }}
     
     content.elements["depthStrider_text"].text = depthStriderValue+"";
     }}
     },
     
     "projectileProt_text": {type:"text",x:845,y:1015,text:projectileProtValue+"",font:{color: android.graphics.Color.WHITE,shadow:.6,size:25}},
      
     "projectileProt": {type:"text",x:400,y:1015,text:Translation.translate("Projectile Protection:"),font:{color: android.graphics.Color.BLACK,shadow:.6,size:25}},
     
     "projectileProt_btn_minus": {type:"button",x:750,y:1000,bitmap: "btn_left_up",bitmap2:"btn_left_down",scale:3,clicker:{
     onClick: function(container){
     var content = container.getGuiContent();
     var slot = container.getSlot("tool_slot");
     if(projectileProtection){
     if(projectileProtValue>0) projectileProtValue -=1;
     
     if(projectileProtValue>0){
     
     protection=false;
     fireProtection=false;
     blastProtection=false;
     content.elements["protection_text"].text=protectionValue+"";
     content.elements["protection_text"].font.color=android.graphics.Color.GRAY;
     content.elements["protection"].font.color=android.graphics.Color.GRAY;

     content.elements["fireProt_text"].text=fireProtValue+"";
     content.elements["fireProt_text"].font.color=android.graphics.Color.GRAY;
     content.elements["fireProt"].font.color=android.graphics.Color.GRAY;

     content.elements["blastProt_text"].text=blastProtValue+"";
     content.elements["blastProt_text"].font.color=android.graphics.Color.GRAY;
     content.elements["blastProt"].font.color=android.graphics.Color.GRAY;
     } else {
     protection=true;
     fireProtection=true;
     blastProtection=true;
     content.elements["protection_text"].text=protectionValue+"";
     content.elements["protection_text"].font.color=android.graphics.Color.WHITE;
     content.elements["protection"].font.color=android.graphics.Color.BLACK;

     content.elements["fireProt_text"].text=fireProtValue+"";
     content.elements["fireProt_text"].font.color=android.graphics.Color.WHITE;
     content.elements["fireProt"].font.color=android.graphics.Color.BLACK;

     content.elements["blastProt_text"].text=blastProtValue+"";
     content.elements["blastProt_text"].font.color=android.graphics.Color.WHITE;
     content.elements["blastProt"].font.color=android.graphics.Color.BLACK;
     }
     
     if(projectileProtValue==1){
     CostLvl-=2;
     projectileProtCap-=2;
     }
     if(projectileProtValue==2){
     CostLvl-=2;
     projectileProtCap-=2;
     }
     if(projectileProtValue==3){
     CostLvl-=4;
     projectileProtCap-=4;
     }
     if(projectileProtValue==0){
     CostLvl-=1;
     projectileProtCap-=1;
     if(0>projectileProtCap){
     CostLvl+=1;
     projectileProtCap+=1;
     }}
     
     content.elements["projectileProt_text"].text = projectileProtValue+"";
     }
     if(!projectileProtection){
     projectileProtValue=0;
     projectileProtCap=0;
     content.elements["projectileProt_text"].text=projectileProtValue+"";
     content.elements["projectileProt_text"].font.color=android.graphics.Color.GRAY;
     }
 
     }}
     },
     
     "projectileProt_btn_plus": {type:"button",x:900,y:1000,bitmap: "btn_right_up",bitmap2:"btn_right_down",scale:3,clicker:{
     onClick: function(container){
     var slot = container.getSlot("tool_slot");
    var content = container.getGuiContent();
    if(projectileProtection){
        if(projectileProtValue<4) projectileProtValue += 1;
     
     if(projectileProtValue>0){
     
     protection=false;
     fireProtection=false;
     blastProtection=false;
     content.elements["protection_text"].text=protectionValue+"";
     content.elements["protection_text"].font.color=android.graphics.Color.GRAY;
     content.elements["protection"].font.color=android.graphics.Color.GRAY;

     content.elements["fireProt_text"].text=fireProtValue+"";
     content.elements["fireProt_text"].font.color=android.graphics.Color.GRAY;
     content.elements["fireProt"].font.color=android.graphics.Color.GRAY;

     content.elements["blastProt_text"].text=blastProtValue+"";
     content.elements["blastProt_text"].font.color=android.graphics.Color.GRAY;
     content.elements["blastProt"].font.color=android.graphics.Color.GRAY;
     } else {
     protection=true;
     fireProtection=true;
     blastProtection=true;
     content.elements["protection_text"].text=protectionValue+"";
     content.elements["protection_text"].font.color=android.graphics.Color.WHITE;
     content.elements["protection"].font.color=android.graphics.Color.BLACK;

     content.elements["fireProt_text"].text=fireProtValue+"";
     content.elements["fireProt_text"].font.color=android.graphics.Color.WHITE;
     content.elements["fireProt"].font.color=android.graphics.Color.BLACK;

     content.elements["blastProt_text"].text=blastProtValue+"";
     content.elements["blastProt_text"].font.color=android.graphics.Color.WHITE;
     content.elements["blastProt"].font.color=android.graphics.Color.BLACK;
     }
     
     if(projectileProtValue==1){
     CostLvl+=1;
     projectileProtCap+=1;
     }
     if(projectileProtValue==2){
     CostLvl+=2;
     projectileProtCap+=2;
     }
     if(projectileProtValue==3){
     CostLvl+=2;
     projectileProtCap+=2;
     }
     if(projectileProtValue==4){
     CostLvl+=4;
     projectileProtCap+=4;
     if(9<projectileProtCap){
     CostLvl-=4;
     projectileProtCap-=4;
     }}
     
     content.elements["projectileProt_text"].text = projectileProtValue+"";
     }
     if(!projectileProtection){
     projectileProtValue=0;
     projectileProtCap=0;
     content.elements["projectileProt_text"].text=projectileProtValue+"";
     content.elements["projectileProt_text"].font.color=android.graphics.Color.GRAY;
     }
 
     }}
     },

     "unbreaking_text": {type:"text",x:845,y:1115,text:unbreakValue+"",font:{color: android.graphics.Color.WHITE,shadow:.6,size:25}},
      
     "unbreaking": {type:"text",x:400,y:1115,text:Translation.translate("Unbreaking:"),font:{color: android.graphics.Color.BLACK,shadow:.6,size:25}},

     
     "unbreak_btn_minus": {type:"button",x:750,y:1100,bitmap: "btn_left_up",bitmap2:"btn_left_down",scale:3,clicker:{
     onClick: function(container){
     var content = container.getGuiContent();
     var slot = container.getSlot("tool_slot");
     if(unbreakValue>0) unbreakValue -=1;
     
     if(unbreakValue==1){
     CostLvl-=6;
     UnbreakCap-=6;
     }
     if(unbreakValue==2){
     CostLvl-=6;
     UnbreakCap-=6;
     }
     if(unbreakValue==0){
     CostLvl-=6;
     UnbreakCap-=6;
     if(UnbreakCap<0){
     UnbreakCap+=6;
     CostLvl+=6;
     }}
 
     content.elements["unbreaking_text"].text=unbreakValue+"";
     }}
     },
     
     "unbreak_btn_plus": {type:"button",x:900,y:1100,bitmap: "btn_right_up",bitmap2:"btn_right_down",scale:3,clicker:{
     onClick: function(container){
     var slot = container.getSlot("tool_slot");
    var content = container.getGuiContent();
        if(unbreakValue<3) unbreakValue += 1;
        
     if(unbreakValue==1){
     CostLvl+=6;
     UnbreakCap+=6;
     }
     if(unbreakValue==2){
     CostLvl+=6;
     UnbreakCap+=6;
     }
     if(unbreakValue==3){
     CostLvl+=6;
     UnbreakCap+=6;
     if(18<UnbreakCap){
     CostLvl-=6;
     UnbreakCap-=6;
     }}
              
     content.elements["unbreaking_text"].text=unbreakValue+"";
     }}
     }


     }
});


epGUI.content.elements["armor_button"] = {type: "button", x: 810, y: 100, scale:5, bitmap: "armor_button_up",bitmap2:"armor_button_down", clicker: {
onClick: function(container){
var content = container.getGuiContent();
lootValue=0;
unbreakValue=0;
efficiencyValue=0;
fortuneValue=0;
silkTouchValue=0;
fireAspectValue=0;
sharpnessValue=0;
infinityValue=0;
powerValue=0;
knockbackValue=0;
flameValue=0;
punchValue=0;
smiteValue=0;
baneValue=0;
LootCap=0;
UnbreakCap=0;
EfficiencyCap=0;
SilkTouchCap=0;
FortuneCap=0;
FireAspectCap=0;
SharpnessCap=0;
InfinityCap=0;
PowerCap=0;
KnockbackCap=0;
FlameCap=0;
PunchCap=0;
SmiteCap=0;
BaneCap=0;
CostLvl=0;
content.elements["looting_text"].text=lootValue+"";
content.elements["unbreaking_text"].text=unbreakValue+"";
content.elements["efficiency_text"].text=efficiencyValue+"";
content.elements["fortune_text"].text=fortuneValue+"";
content.elements["silkTouch_text"].text=silkTouchValue+"";
content.elements["fireAspect_text"].text=fireAspectValue+"";
content.elements["sharpness_text"].text=sharpnessValue+"";
content.elements["infinity_text"].text=infinityValue+"";
content.elements["power_text"].text=powerValue+"";
content.elements["knockback_text"].text=knockbackValue+"";
content.elements["flame_text"].text=flameValue+"";
content.elements["punch_text"].text=punchValue+"";
content.elements["smite_text"].text=smiteValue+"";
content.elements["bane_text"].text=baneValue+"";
container.close();
container.openAs(epGUI_2);
content.elements["lvl"].text = "Need lvl: "+CostLvl;
content.elements["maxLvl"].text = "Max Enc. lvl: "+DenyLvl;
}
}}

epGUI_2.content.elements["tool_button"] = {type: "button", x: 810, y: 100, scale:5, bitmap: "tool_button_up",bitmap2:"tool_button_down", clicker: {
onClick: function(container){
var content = container.getGuiContent();
protectionValue=0;
fireProtValue=0;
blastProtValue=0;
featherValue=0;
respirationValue=0;
aquaAffinityValue=0;
thornsValue=0;
depthStriderValue=0;
projectileProtValue=0;
CostLvl=0;
content.elements["protection_text"].text = protectionValue+"";
content.elements["fireProt_text"].text = fireProtValue+"";
content.elements["blastProt_text"].text = blastProtValue+"";
content.elements["feather_text"].text = featherValue+"";
content.elements["respiration_text"].text = respirationValue+"";
content.elements["aquaAffinity_text"].text = aquaAffinityValue+"";
content.elements["thorns_text"].text = thornsValue+"";
content.elements["depthStrider_text"].text = depthStriderValue+"";
 content.elements["projectileProt_text"].text = projectileProtValue+"";
container.close();
container.openAs(epGUI);
}
}}

epGUI_2.content.elements["repair_button"] = {type: "button", x: 600, y: 100, scale:5, bitmap: "repair_button_up",bitmap2:"repair_button_down", clicker: {
onClick: function(container){
var slot = container.getSlot("tool_slot");
if(Player.getLevel()>=CostLvl){
if(slot.data>0&&slot.data<100){
container.setSlot("tool_slot",slot.id,1,0);
Player.setLevel(Player.getLevel()-repairCost);
}
if(slot.data>=100&&slot.data<500){
container.setSlot("tool_slot",slot.id,1,0);
Player.setLevel(Player.getLevel()-repairCost-5);
}
if(slot.data>=500&&slot.data<=1000){
container.setSlot("tool_slot",slot.id,1,0);
Player.setLevel(Player.getLevel()-repairCost-10);
}
if(slot.data>1000){
container.setSlot("tool_slot",slot.id,1,0);
Player.setLevel(Player.getLevel()-repairCost-15);
}}}
}}

epGUI_2.content.elements["encBtn"] = {type: "button", x:500,y:100,scale:5,bitmap:"ench_button_up",bitmap2:"ench_button_down",clicker:{
onClick: function(container){
var content = container.getGuiContent();
var slot = container.getSlot("tool_slot");
var extra = slot.id.extra;
if(!extra){
extra = new ItemExtraData();
}
var Protection = {type: Native.Enchantment.PROTECTION, level:protectionValue};
var FireProtection = {type: Native.Enchantment.FIRE_PROTECTION, level:fireProtValue};
var BlastProtection = {type: Native.Enchantment.BLAST_PROTECTION, level:blastProtValue};
var FeatherFalling = {type: Native.Enchantment.FEATHER_FALLING, level:featherValue};
var Respiration = {type: Native.Enchantment.RESPIRATION, level:respirationValue};
var AquaAffinity = {type: Native.Enchantment.AQUA_AFFINITY, level:aquaAffinityValue};
var Thorns = {type: Native.Enchantment.THORNS, level:thornsValue};
var DepthStrider = {type: Native.Enchantment.DEPTH_STRIDER, level:depthStriderValue};
var ProjectileProtection = {type: Native.Enchantment.PROJECTILE_PROTECTION, level:projectileProtValue};

if(Protection.level!=0) extra.addEnchant(Protection.type,Protection.level);
if(FireProtection.level!=0) extra.addEnchant(FireProtection.type,FireProtection.level);
if(BlastProtection.level!=0) extra.addEnchant(BlastProtection.type,BlastProtection.level);
if(FeatherFalling.level!=0) extra.addEnchant(FeatherFalling.type,FeatherFalling.level);
if(Respiration.level!=0) extra.addEnchant(Respiration.type,Respiration.level);
if(AquaAffinity.level!=0) extra.addEnchant(AquaAffinity.type,AquaAffinity.level);
if(Thorns.level!=0) extra.addEnchant(Thorns.type,Thorns.level);
if(DepthStrider.level!=0) extra.addEnchant(DepthStrider.type,DepthStrider.level);
if(ProjectileProtection.level!=0) extra.addEnchant(ProjectileProtection.type,ProjectileProtection.level);
if(DenyLvl>=CostLvl){
if(Player.getLevel()>0&&Player.getLevel()>=CostLvl){
Entity.setCarriedItem(Player.get(),slot.id,1,slot.data,extra);
Player.setLevel(Player.getLevel()-CostLvl);
container.clearSlot("tool_slot");
container.validateSlot("tool_slot");
}}
}}}

epGUI_2.content.elements["tool_slot"] = {type: "slot", x: 400, y: 100, size: 75}
epGUI_2.content.elements["lvl"] = {type: "text", x: 400, y: 50, scale:5,text:"Need lvl: "+CostLvl,font:{color: android.graphics.Color.WHITE,shadow:.6,size:25}}
epGUI_2.content.elements["maxLvl"] = {type: "text", x: 600, y: 50, scale:5,text:"Max Enc. lvl: "+DenyLvl,font:{color: android.graphics.Color.WHITE,shadow:.6,size:25}}


TileEntity.registerPrototype(BlockID.etp, {
    
/*initAnimation: function(){
        this.animation = new Animation.Item(this.x + .5, this.y + 1, this.z + .5);
        
        this.animation.describeItem({
            id: 340,
            count: 1,
            data: 0,
            rotation: "x\y\z",
            size: 0
        });
        this.animation.load();
        },
    
    destroyAnimation: function(){
        if(this.animation1){
            this.animation1.destroy();
        }
        },
        
        updateAnimation: function(){
        this.destroyAnimation();
        this.initAnimation();
    },
    
    init: function(){
        this.initAnimation();
    },
    
    destroy: function(){
        this.destroyAnimation();
    },*/
        
     tick: function(){
     var content=this.container.getGuiContent();
     if(content){
      content.elements["lvl"].text=Translation.translate("Need lvl: ")+CostLvl;
     content.elements["maxLvl"].text=Translation.translate("Max Enc. lvl: ")+DenyLvl;
     }
     },

     click: function(id, count, data, coords){
this.container.validateSlot("tool_slot");
      },
    
     getGuiScreen: function(){
     if(Player.getCarriedItem().id==0) return epGUI;
     }
});
     
Callback.addCallback("NativeCommand",function(str){
var cmd=str.split(" ");
if(cmd[0]=="/c1"){
for(var i=0;i<44;i++){
Player.setInventorySlot(i,0,0,0);
}}
if(cmd[0]=="/exp"){
Player.setLevel(parseInt(cmd[1]));
}
if(cmd[0]=="/dmg"){
Player.setCarriedItem(Player.getCarriedItem().id,1,Player.getCarriedItem().data+cmd[1]);
}
});