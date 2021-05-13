package com;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;
import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class SponsorAPI
 */
@WebServlet("/SponsorAPI")
public class SponsorAPI extends HttpServlet {
	private static final long serialVersionUID = 1L;
	 
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public SponsorAPI() {
        super();
       
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		Sponsor s = new Sponsor(); 
		String output = s.insertSponsorDetails(request.getParameter("f_name"),
				 request.getParameter("l_name"),
				 request.getParameter("company"),
				 request.getParameter("job"),
				 request.getParameter("phone"),
				 request.getParameter("mail"),
				 request.getParameter("city"));
				response.getWriter().write(output);
	}

	/**
	 * @see HttpServlet#doPut(HttpServletRequest, HttpServletResponse)
	 */
	protected void doPut(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		Sponsor s = new Sponsor();
		Map paras = getParasMap(request);
		 String output = s.updateSponsorDetails(paras.get("hidIDSave").toString(),
		 paras.get("f_name").toString(),
		 paras.get("l_name").toString(),
		 paras.get("company").toString(),
		 paras.get("job").toString(),
		 paras.get("phone").toString(),
		 paras.get("mail").toString(),
		 paras.get("city").toString());
		response.getWriter().write(output);
		}
	

	/**
	 * @see HttpServlet#doDelete(HttpServletRequest, HttpServletResponse)
	 */
	protected void doDelete(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		Sponsor s = new Sponsor();
		Map paras = getParasMap(request);
		 String output = s.deleteSponsorDetails(paras.get("buyer_id").toString());
		response.getWriter().write(output);
	}

	
	
	
	
	

	//Convert request parameters to a Map
	private static Map getParasMap(HttpServletRequest request)
	{
	Map<String, String> map = new HashMap<String, String>();
	try
	{
	Scanner scanner = new Scanner(request.getInputStream(), "UTF-8");
	String queryString = scanner.hasNext() ?
	scanner.useDelimiter("\\A").next() : "";
	scanner.close();
	String[] params = queryString.split("&");
	for (String param : params)
	{ 
	String[] p = param.split("=");
	map.put(p[0], p[1]);
	}
	}
	catch (Exception e)
	{
	}
	return map; 
	}

}
