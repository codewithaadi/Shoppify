import { FC,useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ListItem,Divider } from "@mui/material";
import { SearchContainer,InputSearchBase,SearchIconWrapper,ListWrapper } from "./StyledComponents";
import SearchIcon from '@mui/icons-material/Search';
import { RootState } from "../../redux/reducers/rootReducer";

const Search:FC = () => {

  const [text, setText] = useState<string>('');
  const {products} = useSelector((state:RootState)=>state.product)


  const getText = (text:string) => {
    setText(text);
}
  return (
    <SearchContainer>
                <InputSearchBase placeholder='Search for products,brands and more' onChange={(e) => getText(e.target.value)} value={text}/>
                <SearchIconWrapper>
                    <SearchIcon />
                </SearchIconWrapper>
                {
                    text &&
                    <ListWrapper>
                        {
                            products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product => (
                                <>
                                    <ListItem>
                                        <Link to={`/product/${product.id}`} onClick={()=>setText('')} style={{textDecoration:'none', color:'inherit'}}>
                                            <SearchIcon style={{ marginRight: 20 }} />{product.title.longTitle}
                                        </Link>
                                    </ListItem>
                                    <Divider />
                                </>
                            ))
                        }
                    </ListWrapper>
                }
            </SearchContainer>
  )
}

export default Search