//Written by: Eric Gleiser
//© 2015 DigiPen, All Rights Reserved.

Pixel

fragment DiffuseWarping

AutoBlock

inputs
{
    // Custom Inputs
    texture TextureRamp;
    float EdgeFalloffPower;
    float EdgeFalloffScale;
    float4 EdgeGlowColor;

    //Built In
    // View Space Normal
    float3 Normal;
    // Us from mesh
    float2 Uv;
    // Time in seconds
    float Time;
    // Object color from model
    float4 ObjectColor;
    // Position in view space
    float3 PixelPosition;
    //Eye is at 0,0,0  
}

outputs
{
    //Color added to the surface
    float4 Additive;
    
    //Surface effected by lighting
    float4 SurfaceColor;
}

fragmentCode

void DiffuseWarping(inout Data data)
{
    //float3 lightDir = data.Normal;
    //normalize(lightDir);
    //float rampCoord = dot(lightDir, data.PixelPosition) * 0.5 + 0.5;
    //data.Additive = tex1D(TextureRamp, rampCoord) * texColor;
    // Simple edge glow
    //float4 texColor = tex2D(TextureRamp, data.Uv);
    //float scalar = saturate(1 - dot( -normalize(data.PixelPosition), data.Normal ));   
    //scalar = pow( scalar, data.EdgeFalloffPower) * data.EdgeFalloffScale;
    //data.Additive = scalar * data.EdgeGlowColor * texColor;
}