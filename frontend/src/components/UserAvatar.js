import Avatar from '@mui/material/Avatar';
import CardMedia from '@mui/material/CardMedia';

function UserAvatar() {
  //TODO enable custom avatar
  //const TEMP_avatarURL = "https://picsum.photos/35/35"

  return (

    <Avatar sx={{
      bgcolor: 'primary.main',
      width: '35px',
      height: '35px'
    }}>
    </Avatar>

    //TODO enable custom avatar

    //<CardMedia
    //  sx={{ borderRadius:"50%" }}
    //  component="img"
    //  height="35"
    //  width="35"
    //  image={TEMP_avatarURL}
    //  alt="user avatar"
    ///>

  )
}

export default UserAvatar;