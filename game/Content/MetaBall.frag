//Written by: Eric Gleiser
//© 2015 DigiPen, All Rights Reserved.

Pixel

fragment MetaBall

AutoBlock

inputs
{
    // Custom Inputs
    texture MetaBallTexture;
    float4 ColorTint;

    //Built I2
    // View Space Normal
    float3 Normal;
    // Us from mesh
    float2 Uv;
    // Time in seconds
    float Time;
    // Object color from model
    //float4 ObjectColor;
    // Position in view space
    float3 PixelPosition;
    //Eye is at 0,0,0  
}

outputs
{
    //Color added to the surface
    float4 Additive;
    
    //Surface effected by lighting
    //float4 SurfaceColor;
}

fragmentCode

void MetaBall(inout Data data)
{
    // Simple edge glow
    //float4 texColor = tex2D(TestTexture, data.Uv);
    //float scalar = saturate(1 - dot( -normalize(data.PixelPosition), data.Normal ));   
    //scalar = pow( scalar, data.EdgeFalloffPower) * data.EdgeFalloffScale;
    //data.Additive = scalar * data.EdgeGlowColor * texColor;
    float4 texColor = tex2D(MetaBallTexture, data.Uv);
    //float4 finalColor = float4(0.0,texColor.g/2.0,texColor.b,texColor.a);
    float4 finalColor = data.ColorTint * float4(0.0,texColor.g/2.0,texColor.b,texColor.a);
    if(finalColor.a>0.5)
    {
        finalColor.a=1;
        finalColor.b = floor((finalColor.b/0.1)*0.5);
    }
    finalColor = finalColor * 1.0;
    if(finalColor.a<0.5 && finalColor.a>0.1)
    {
        finalColor.a=0.2;

    }
    data.Additive = finalColor;
}