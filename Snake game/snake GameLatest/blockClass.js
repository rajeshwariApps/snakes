function c_blocks(xPos, yPos, size, color,rectSpeed, isHead)
{
    this.xPos = xPos;
    this.yPos  = yPos;
    this.size = size;
    this.rectSpeed = rectSpeed;
    this.color = color;
    this.RectDirFlag = [1,0,0,0];
    this.xPosMap = [];
    this.yPosMap = [];
    this.isHead = isHead;
    this.drawRects = m_drawEachRect;
}
 
function m_drawEachRect(ctx)
{
    ctx.lineWidth = 1;
    ctx.fillStyle = (this.isHead? "darkred" : this.color);
    ctx.fillRect(this.xPos,this.yPos,this.size,this.size);
    ctx.strokeStyle = "blue";
    ctx.strokeRect(this.xPos,this.yPos,this.size,this.size);
}
