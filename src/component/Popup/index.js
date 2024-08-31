import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  Button
} from '@chakra-ui/react';

export default function Popup() {


  return (
    <Popover  placement='bottom' closeOnBlur={false} >
      <PopoverTrigger>
        <Button w="fit-content" h="fit-content" fontSize='14px' fontWeight='400' color="black" padding='5px 8px 5px 8px'  marginLeft="200px" backgroundColor='rgba(0,0,0,0.2)' borderRadius='4px' _hover={{ backgroundColor: "#17153B", color: "#525CEB"}}>Cities</Button>
      </PopoverTrigger>

      <PopoverContent color='white' bg='rgba(0, 0, 0, 0.9)'  w="240px" h="fit-content" p="5px 10px 5px 10px" borderRadius='4px'>
        <PopoverArrow bg='rgba(0, 0, 0, 0.9)' />
        <PopoverHeader display='flex' alignItems='center' justifyContent='flex-end'>
          <PopoverCloseButton w="5px" bg='transparent' color="#F5F7F8" _hover={{backgroundColor: "rgba(0,0,0,0.2)", color: "#525CEB"}} />
        </PopoverHeader>

        <PopoverBody w='100%' m='5px 0px 2.5px 0px ' >
          <div style={{ display:'flex', alignItems:'center', justifyContent:'space-around',margin:'5px 0px 8px 0px'  }} >
            <button>Varanasi</button>
            <button>Delhi</button>
            <button>Lucknow</button>
            <button>Mumbai</button>
            <button>Kolkata</button>
            <button>Pune</button>
            <button>Banglore</button>
            <button>Gurugram</button>
          </div>
        </PopoverBody>

      </PopoverContent>
    </Popover>
  );
}