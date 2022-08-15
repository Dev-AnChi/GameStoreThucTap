import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameComponent } from './game/game.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DetailGameComponent } from './detail-game/detail-game.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { CreateEditGameComponent } from './create-edit-game/create-edit-game.component';
import { CreateGameComponent } from './create-edit-game/create-game/create-game.component';
import { EditGameComponent } from './create-edit-game/edit-game/edit-game.component';
import { CreateEditUserComponent } from './create-edit-user/create-edit-user.component';
import { CreateUserComponent } from './create-edit-user/create-user/create-user.component';
import { EditUserComponent } from './create-edit-user/edit-user/edit-user.component';

const routes: Routes = [
  {path:"", component:GameComponent},
  {path:"game", component:GameComponent},
  {path:"login", component:LoginComponent},
  {path:"register", component:RegisterComponent},
  {path:"detail_game", component:DetailGameComponent},
  {path:"user_profile", component:UserProfileComponent},
  {path:"create-edit-game", component:CreateEditGameComponent},
  {path:"create-game", component:CreateGameComponent},
  {path:"edit-game", component:EditGameComponent},
  {path:"create-edit-user", component:CreateEditUserComponent},
  {path:"create-user", component:CreateUserComponent},
  {path:"edit-user", component:EditUserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
