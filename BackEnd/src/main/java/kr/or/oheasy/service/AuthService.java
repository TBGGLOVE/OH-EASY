package kr.or.oheasy.service;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kr.or.oheasy.dao.AuthDao;
import kr.or.oheasy.vo.LoginVO;

@Service
public class AuthService {

    @Autowired
    private SqlSession sqlSession;
    
    
    public int login(LoginVO loginVO) {
    	AuthDao dao = sqlSession.getMapper(AuthDao.class);

    	
    	return dao.login(loginVO);
    }
    
    
    
}