import { UserIcon, SettingsIcon, BellIcon, LogOutIcon, CreditCardIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { useGetUserQuery } from '../features/user/userApi.js'
import { base } from '../app/mainApi.js'
import { useDispatch } from 'react-redux'
import { removeUser } from '../features/user/userSlice.js'
import { useNavigate } from 'react-router'

const listItems = [
  {
    icon: UserIcon,
    property: 'Profile'
  },
  {
    icon: SettingsIcon,
    property: 'Settings'
  },
  {
    icon: CreditCardIcon,
    property: 'Billing'
  },
  {
    icon: BellIcon,
    property: 'Notifications'
  },
  {
    icon: LogOutIcon,
    property: 'Sign Out'
  }
]

const DropdownMenuButton = ({ user }) => {
  const dispactch = useDispatch();
  const nav = useNavigate();
  const { isLoading, error, data } = useGetUserQuery(user.token);
  if (isLoading) return <Button variant='secondary' size='icon' className='overflow-hidden rounded-full'>

  </Button>
  if (error) return <p className='text-red-500'>{error.data?.message}</p>;



  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='secondary' size='icon' className='overflow-hidden rounded-full'>
          <img src={`${base}/${data.image}`} alt='Hallie Richards' />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-56'>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuGroup>
          {listItems.map((item, index) => {


            return <DropdownMenuItem
              onClick={() => {
                switch (item.property) {

                  case 'Sign Out':
                    dispactch(removeUser());
                    break;

                  case 'Profile':
                    nav('/profile');
                    break;


                }
              }}

              key={index}>
              <item.icon />
              <span className='text-popover-foreground'>{item.property}</span>
            </DropdownMenuItem>
          }



          )}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default DropdownMenuButton
