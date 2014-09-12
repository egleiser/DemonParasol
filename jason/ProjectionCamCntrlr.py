mport Zero
import Events
import Property
import VectorMath
import Keys
import math

Vec3 = VectorMath.Vec3
Quat = VectorMath.Quat

class CameraController:

    FlipSpeed = Property.Float(2.5)
    
    
    def Initialize(self, initializer):
        self.flipCam = True
        #Var representing the rotation value wanted when flipping
        self.wantedRot = self.Owner.Transform.Rotation
        #Var representing the translation values wanted when flipping
        self.wantedPos = self.Owner.Transform.Translation
        Zero.Connect(self.Space, Events.LogicUpdate, self.OnLogicUpdate)
        Zero.Connect(self.Space, Events.LevelStarted, self.OnLevelStarted);
        
    def OnLogicUpdate(self, UpdateEvent):
        #Logic for player input
        self.UpdatePlayerInput()
        #Logic for camera rotation
        self.UpdateCamVectors(UpdateEvent)
        
    def OnLevelStarted(self, e):
        self.CamTarget = self.Space.FindObjectByName("Player")
        #print("Level started;", self.CamTarget)
        
        
    def UpdatePlayerInput(self):
        if(Zero.Keyboard.KeyIsPressed(Zero.Keys.Shift)):
            self.FlipCamMovement()
            print("something")
            
    #Method for updating the camera vectors every frame as it flips.
    def UpdateCamVectors(self, UpdateEvent):
        #print("Updating;", self.CamTarget)
        playerPos = self.CamTarget.Transform.Translation

        if(self.flipCam):
            self.wantedRot = Quat.EulerXYZ(0,0,0)
            self.wantedPos = Vec3(playerPos.x, playerPos.y,25)
        else:
            self.wantedRot = Quat.EulerXYZ(0,math.radians(180),0)
            self.wantedPos = Vec3(playerPos.x, playerPos.y,-25)
        self.Owner.Transform.Rotation = Quat.Slerp(self.Owner.Transform.Rotation, self.wantedRot, UpdateEvent.Dt * self.FlipSpeed)
        self.Owner.Transform.Translation = Vec3.lerp(self.Owner.Transform.Translation, self.wantedPos, UpdateEvent.Dt * self.FlipSpeed)
        
    #Method for flipping the camera
    def FlipCamMovement(self):
        self.flipCam = not self.flipCam
        
        
        
    
Zero.RegisterComponent("CameraController", CameraController)