<%- include ../layouts/header.ejs %>
 
<% if (messages.error) 
{ %>
    <p style="color:red"><%- messages.error %></p>
<% } %>
 
<% if (messages.success) 
{ %>
    <p style="color:green"><%- messages.success %></p>
<% } %>    
 
<table width='80%' border=0>
 
    <tr style='text-align:left; background-color:#CCC'>
        <th>Name</th>
        <th>Age</th>
        <th>Email</th>
        <th>Action</th>
    </tr>
     <% if (data)
     { %>
    <% data.forEach(function(user)
    { %>
        <tr>
            <td><%= user.name %></td>
            <td><%= user.age %></td>
            <td><%= user.email %></td>
            <td>
                <div style="float:left">
                    <a href='/users/edit/<%= user._id %>'>Edit</a> &nbsp;                            
                    <form method="post" action="/users/delete/<%= user._id %>" style="float:right">
                        <input type="submit" name="delete" value='Delete' onClick="return confirm('Are you sure you want to delete?')" />
                        <input type="hidden" name="_method" value="DELETE" />
                    </form>
                </div>
            </td>
        </tr>
    <% }) %>
    <% } %>
 
</table>
<%- include ../layouts/footer.ejs %>
 
