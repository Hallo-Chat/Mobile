package nhom1.cnm.hallochat.adapter;

import android.view.View;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.mikhaellopez.circularimageview.CircularImageView;

import nhom1.cnm.hallochat.R;

public class MyViewHolder extends RecyclerView.ViewHolder {

    public CircularImageView imageViewProfile;
    public TextView tenView, trangThaiView;

    public MyViewHolder(@NonNull View itemView) {
        super(itemView);
        imageViewProfile = itemView.findViewById(R.id.profile);
        tenView = itemView.findViewById(R.id.tv_ten);
        trangThaiView = itemView.findViewById(R.id.tv_trangThai);
    }
}
