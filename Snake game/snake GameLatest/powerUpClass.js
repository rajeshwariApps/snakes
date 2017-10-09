function powerUps(xPos, yPos,size, color)
{
    this.xPos = xPos;
    this.yPos = yPos;
    this.color = color;
    this.size = size;
    this.grow = false;
    this.shrink = false;
    this.accelerate = false;
    this.deccelerate = false;
    this.showPowerUp = false;
    this.drawPowerUp = m_drawPowerUps;
}

function m_drawPowerUps(ctx)
{
    ctx.fillStyle = this.color;
    ctx.fillRect(this.xPos, this.yPos, this.size, this.size)
    ctx.strokeStyle = "black";
    ctx.strokeRect(this.xPos, this.yPos, this.size, this.size);
}
function initPowerUp()
{
    var max = 3;
    var min = 0;
    var powerX = Math.floor((Math.random() * (maximumSpace - minimumSpace + 1)) + minimumSpace );
    var powerY = Math.floor((Math.random() * (maximumSpace - minimumSpace + 1)) + minimumSpace );
    //var ran
    randomColorIndex = Math.floor((Math.random()*(max - min + 1)) + min);
    var colorList = ["magenta", "blue", "green", "red"];
    powerUpObj = new powerUps(powerX, powerY, 15, colorList[randomColorIndex]);
    powerUpObj.showPowerUp = true;
    if( randomColorIndex == 0)
    {
        powerUpObj.deccelerate = true;
    }
    if( randomColorIndex == 1)
    {
        powerUpObj.accelerate = true;
    }
    if( randomColorIndex == 2)
    {
        powerUpObj.grow = true;
    }
    if( randomColorIndex == 3)
    {
        powerUpObj.shrink = true;
    }
}

function renderPowerUp(ctx)
{
   powerUpObj.drawPowerUp(ctx);
}