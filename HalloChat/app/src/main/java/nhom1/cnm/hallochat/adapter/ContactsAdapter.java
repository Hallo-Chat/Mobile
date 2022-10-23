package nhom1.cnm.hallochat.adapter;

import android.content.Context;
import android.content.Intent;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import java.util.ArrayList;
import java.util.List;

import nhom1.cnm.hallochat.R;
import nhom1.cnm.hallochat.model.UserModel;
import nhom1.cnm.hallochat.view.ChatActivity;

public class ContactsAdapter extends RecyclerView.Adapter<MyViewHolder> {

    List<UserModel> userModelList = new ArrayList<>();
    private Context context;

    public ContactsAdapter(List<UserModel> userModelList) {
        this.userModelList = userModelList;
    }

    @NonNull
    @Override
    public MyViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        context = parent.getContext();
        return new MyViewHolder(LayoutInflater.from(parent.getContext()).inflate(R.layout.contact_item, parent, false));
    }

    @Override
    public void onBindViewHolder(@NonNull MyViewHolder holder, int position) {
        holder.tenView.setText(userModelList.get(position).getTen());
        holder.trangThaiView.setText(userModelList.get(position).getTrangThai());
        holder.imageViewProfile.setImageResource(userModelList.get(position).getAnhDaiDien());
        holder.itemView.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                context.startActivity(new Intent(context, ChatActivity.class));
            }
        });
    }

    @Override
    public int getItemCount() {
        return userModelList.size();
    }
}
