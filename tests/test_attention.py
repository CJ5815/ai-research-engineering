import sys
from pathlib import Path
sys.path.insert(0, str(Path(__file__).resolve().parents[1] / 'src'))
import numpy as np
from ai_research.attention import attention

def test_attention():
    x = np.eye(3)
    out, w = attention(x,x,x,causal=True)
    assert np.allclose(w.sum(axis=1),1)
    assert np.allclose(np.triu(w,1),0)
    assert np.allclose(out,w)
