IDRegistry.genBlockID("etp");
IDRegistry.genItemID("table_upgrade");

var BLOCK_TYPE_ENCHANTING_TABLE = Block.createSpecialType({
base:116,
destroytime:5
});

Block.createBlock("etp", [{name:"Advanced Enchantment Table",texture:[
["ench_table_plus_bottom",0],
["ench_table_plus_top",0],
["ench_table_plus_side",0],
["ench_table_plus_side",0],
["ench_table_plus_side",0],
["ench_table_plus_side",0]],
inCreative:true}],BLOCK_TYPE_ENCHANTING_TABLE);

Block.setBlockShape(BlockID.etp,{x:0,y:0,z:0},{x:1,y:.750,z:1});

ToolAPI.registerBlockMaterial(BlockID.etp, "stone",2,true);
Block.setDestroyLevel(BlockID.etp,2);

Item.createItem("table_upgrade","Table Upgrade",{name:"tableUpgrade",meta:0},{stack:16});

Callback.addCallback("ItemUse",function(coords,item,block){
if(block.id==BlockID.etp&&item.id!=0){Game.prevent();}
if(Entity.getSneaking(Player.get())&&block.id==116&&item.id==ItemID.table_upgrade){
World.setBlock(coords.x,coords.y,coords.z,BlockID.etp,0);
Player.decreaseCarriedItem(1);
}});