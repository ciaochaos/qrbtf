import {connect, useDispatch} from 'react-redux';
import {changeStyle, createParam} from "../../actions";
import StyleList from "../../components/style/StyleList";
import RendererViewer from "./RendererViewer";
import RendererBlank from "../../components/renderer/RendererBlank";
import RendererBase from "../../components/renderer/RendererBase";
import RendererDSJ from "../../components/renderer/RendererDSJ";
import RendererRound from "../../components/renderer/RendererRound";
import RendererRandRound from "../../components/renderer/RendererRandRound";
import RendererRandRect from "../../components/renderer/RendererRandRect";
import Renderer25D from "../../components/renderer/Renderer25D";
import RendererImage from "../../components/renderer/RendererImage";
import * as React from "react";
import RendererResImage from "../../components/renderer/RendererResImage";

const styles = [
    {value: "A1", renderer: RendererBase},
    {value: "A2", renderer: RendererRound},
    {value: "A3", renderer: RendererRandRound},
    {value: "SP — 1", renderer: RendererDSJ},
    {value: "SP — 2", renderer: RendererRandRect},
    {value: "B1", renderer: Renderer25D},
    {value: "C1", renderer: RendererImage},
    {value: "C2", renderer: RendererResImage},
]

const paramInfoBuffer = new Array(16).fill(new Array(16))
const paramValueBuffer = new Array(16).fill(new Array(16))

const setParamInfo = (renderIndex, paramInfo) => {
    paramInfoBuffer[renderIndex] = paramInfo
    paramValueBuffer[renderIndex] = paramInfo.map(item => item.default)
}

const mapStateToProps = state => ({
    styles: styles.map((style, index) => {
        return {
            value: style.value,
            selected: state.selectedIndex == index,
            renderer: <RendererViewer rendererType={style.renderer} index={index} setParamInfo={setParamInfo}/>
        }
    })
})

const mapDispatchToProps = dispatch => ({
    onSelected: rendererIndex => {
        dispatch(changeStyle(rendererIndex, styles[rendererIndex].renderer, styles[rendererIndex].value))
    }
})

const StyleListViewer = ({setParamInfo}) => {
    let res = connect(mapStateToProps, mapDispatchToProps)(StyleList)
    setParamInfo(paramInfoBuffer, paramValueBuffer);
    return res;
}

export default StyleListViewer;